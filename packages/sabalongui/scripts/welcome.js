const loadingChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const totalSteps = 20;
let currentStep = 0;

console.log('\n\x1b[36m%s\x1b[0m', '  Preparing SabalongUI...');

const loader = setInterval(() => {
  const char = loadingChars[currentStep % loadingChars.length];
  const progress = Math.round((currentStep / totalSteps) * 100);
  const bar = '█'.repeat(Math.floor(currentStep / 2)) + '░'.repeat(10 - Math.floor(currentStep / 2));
  
  process.stdout.write(`\r  \x1b[34m${char}\x1b[0m  [${bar}] ${progress}%`);
  
  if (currentStep >= totalSteps) {
    clearInterval(loader);
    process.stdout.write('\r\x1b[K');
    showFinalMessage();
  }
  currentStep++;
}, 100);

function showFinalMessage() {
  console.log('  \x1b[32m✔\x1b[0m  \x1b[1mInstallation Complete!\x1b[0m');
  console.log('\n  \x1b[1m\x1b[33m"Lamen sate balong kenang sabalong"\x1b[0m');
  console.log('  \x1b[35mSilamo sia ngoding! 🚀\x1b[0m');
  
  console.log('\n  \x1b[90m─────────────────────────────────────────\x1b[0m');
  console.log('  \x1b[37mDeveloper :\x1b[0m \x1b[1mRzfan03\x1b[0m');
  console.log('  \x1b[37mGitHub    :\x1b[0m \x1b[36mhttps://github.com/Rzfan03\x1b[0m');
  console.log('  \x1b[37mDocs      :\x1b[0m \x1b[34mhttps://sabalong-ui.vercel.app\x1b[0m');
  console.log('  \x1b[90m─────────────────────────────────────────\x1b[0m\n');
  
  process.exit(0);
}