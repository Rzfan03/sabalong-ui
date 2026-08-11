const { name, version } = require('../package.json');

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
};

function gradient(text, stops) {
  const parse = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  const colors = stops.map(parse);
  const segments = text.length - 1;
  let out = '';

  for (let i = 0; i < text.length; i++) {
    const pos = segments === 0 ? 0 : i / segments;
    const scaled = pos * (colors.length - 1);
    const idx = Math.min(Math.floor(scaled), colors.length - 2);
    const t = scaled - idx;
    const a = colors[idx];
    const b = colors[idx + 1];
    const r = Math.round(a[0] + (b[0] - a[0]) * t);
    const g = Math.round(a[1] + (b[1] - a[1]) * t);
    const bl = Math.round(a[2] + (b[2] - a[2]) * t);
    out += `\x1b[1;38;2;${r};${g};${bl}m${text[i]}`;
  }

  return out + c.reset;
}

function divider() {
  return c.dim + '  ────────────────────────────────────────────' + c.reset;
}

function printWelcome() {
  console.log('\n  ' + gradient('S A B A L O N G U I', ['#22d3ee', '#818cf8', '#e879f9']));
  console.log(c.bold + c.magenta + `  Silamo sia ngoding! v${version} ` + c.reset + '🚀\n');
  console.log(divider());
  console.log(c.dim + '  Docs   ' + c.reset + c.blue + 'https://sabalong-ui.vercel.app' + c.reset);
  console.log(c.dim + '  GitHub ' + c.reset + c.blue + 'https://github.com/Rzfan03/sabalong-ui' + c.reset);
  console.log(divider());
  console.log(c.dim + '  "Lamen sate balong kenang sabalong"' + c.reset + '\n');
}

const isTTY = Boolean(process.stdout.isTTY) && !process.env.CI;

if (!isTTY) {
  printWelcome();
} else {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const totalSteps = 10;
  let currentStep = 0;

  process.stdout.write(c.cyan + '  Setup Your ' + name + '...' + c.reset);

  const loader = setInterval(() => {
    const char = frames[currentStep % frames.length];
    process.stdout.write(`\r  ${c.blue}${char}${c.reset}  Preparing ${name}...`);

    if (currentStep >= totalSteps) {
      clearInterval(loader);
      process.stdout.write('\r\x1b[K');
      printWelcome();
    }
    currentStep++;
  }, 60);
}
