#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import prompts from 'prompts'

const __dirname = dirname(fileURLToPath(import.meta.url))

const TEMPLATES = [
  { title: 'Vite + React (TypeScript)', value: 'template-vite' },
  { title: 'Next.js (App Router)', value: 'template-next' },
]

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
}

function wordmark(text) {
  const stops = ['#22d3ee', '#818cf8', '#e879f9']
  const parse = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]
  const colors = stops.map(parse)
  const segments = text.length - 1
  let out = ''

  for (let i = 0; i < text.length; i++) {
    const pos = segments === 0 ? 0 : i / segments
    const scaled = pos * (colors.length - 1)
    const idx = Math.min(Math.floor(scaled), colors.length - 2)
    const t = scaled - idx
    const a = colors[idx]
    const b = colors[idx + 1]
    const r = Math.round(a[0] + (b[0] - a[0]) * t)
    const g = Math.round(a[1] + (b[1] - a[1]) * t)
    const bl = Math.round(a[2] + (b[2] - a[2]) * t)
    out += `\x1b[1;38;2;${r};${g};${bl}m${text[i]}`
  }

  return out + c.reset
}

function sanitize(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-') || 'sabalong-app'
}

function detectPm() {
  const ua = process.env.npm_config_user_agent || ''
  if (ua.includes('pnpm')) return 'pnpm'
  if (ua.includes('yarn')) return 'yarn'
  if (ua.includes('bun')) return 'bun'
  return 'npm'
}

function replacePlaceholders(root, appName) {
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name)
      if (entry.isDirectory()) walk(p)
      else {
        const content = readFileSync(p, 'utf8')
        if (content.includes('{{APP_NAME}}')) {
          writeFileSync(p, content.split('{{APP_NAME}}').join(appName))
        }
      }
    }
  }
  walk(root)
}

function printNextSteps(projectName, pm = detectPm(), installed = false) {
  const cmd = pm
  console.log(c.dim + '  ──────────────────────────────────────────' + c.reset)
  console.log(c.bold + '  Next steps:' + c.reset)
  console.log('    ' + c.cyan + 'cd ' + projectName + c.reset)
  if (!installed) console.log('    ' + c.cyan + cmd + ' install' + c.reset)
  console.log('    ' + c.cyan + cmd + ' run dev' + c.reset)
  console.log(c.dim + '  ──────────────────────────────────────────' + c.reset)
  console.log(c.dim + '  Docs: https://sabalong-ui.vercel.app' + c.reset)
  console.log(c.dim + '  "Lamen sate balong kenang sabalong"\n' + c.reset)
}

async function main() {
  console.log('\n  ' + wordmark('C R E A T E  S A B A L O N G U I'))
  console.log(c.dim + '  Scaffold a new project with SabalongUI\n' + c.reset)

  const args = process.argv.slice(2)
  const positional = args.filter((a) => !a.startsWith('--'))
  const flagValue = (name) => {
    const i = args.indexOf(name)
    return i >= 0 ? args[i + 1] : undefined
  }
  const skipInstall = args.includes('--skip-install')

  let projectName = positional[0]
  if (!projectName) {
    const res = await prompts({
      type: 'text',
      name: 'value',
      message: 'Project name:',
      initial: 'sabalong-app',
    })
    if (!res.value) process.exit(1)
    projectName = res.value
  }
  projectName = sanitize(projectName)

  let templateName = flagValue('--template')
  if (!templateName || !TEMPLATES.some((t) => t.value === templateName)) {
    const res = await prompts({
      type: 'select',
      name: 'value',
      message: 'Select a framework:',
      choices: TEMPLATES,
      initial: 0,
    })
    if (!res.value) process.exit(1)
    templateName = res.value
  }
  const template = TEMPLATES.find((t) => t.value === templateName)

  const targetDir = join(process.cwd(), projectName)

  if (existsSync(targetDir) && readdirSync(targetDir).length > 0) {
    const res = await prompts({
      type: 'confirm',
      name: 'value',
      message: `Directory "${projectName}" already exists. Overwrite?`,
      initial: false,
    })
    if (!res.value) process.exit(1)
  }

  mkdirSync(targetDir, { recursive: true })
  cpSync(join(__dirname, templateName), targetDir, { recursive: true })
  replacePlaceholders(targetDir, projectName)

  console.log(c.green + '  ✔ Scaffolded ' + c.reset + c.bold + projectName + c.reset + ` (${template.title})\n`)

  if (skipInstall) {
    printNextSteps(projectName)
    return
  }

  const res = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Install dependencies now?',
    initial: true,
  })

  if (!res.value) {
    printNextSteps(projectName)
    return
  }

  const pm = detectPm()
  console.log(c.cyan + `  Installing with ${pm}...` + c.reset + '\n')
  const child = spawn(pm, ['install'], { cwd: targetDir, stdio: 'inherit' })
  child.on('close', (code) => {
    if (code === 0) {
      console.log('\n  ' + c.green + '✔ Done!' + c.reset)
      printNextSteps(projectName, pm, true)
    } else {
      console.log(c.dim + '  Install gagal, jalankan manual:' + c.reset)
      printNextSteps(projectName, pm)
    }
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
