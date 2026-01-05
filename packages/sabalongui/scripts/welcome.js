// packages/sabalongui/scripts/welcome.js

const loadingChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
let i = 0;

console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'Menginstall Sabalong-UI');

const loader = setInterval(() => {
  process.stdout.write(`\r\x1b[34m${loadingChars[i++ % loadingChars.length]}\x1b[0m Finalizing installation...`);
}, 100);

setTimeout(() => {
  clearInterval(loader);
  process.stdout.write('\r'); 
  
  console.log('\x1b[32m%s\x1b[0m', 'Installation Complete!');
  console.log('\x1b[1m\x1b[33m%s\x1b[0m', '          Silamo sia ngoding! 🚀');
  
  // Developer Info & Clickable Link
  console.log('\x1b[37m%s\x1b[0m', 'Developer: Rzfan03');
  console.log('\x1b[36m%s\x1b[0m', 'GitHub: \x1b]8;;https://github.com/Rzfan03\x07https://github.com/Rzfan03\x1b]8;;\x07');
  console.log('\x1b[34m%s\x1b[0m', 'Docs: https://sabalong-ui.vercel.app');
  
  console.log('\n');
}, 2000);