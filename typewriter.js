const sentence = 'hello there from lighthouselabs';
let time = 50;
let length = 0;

for (const char of sentence) {
  setTimeout(() => {
      process.stdout.write(char);
  }, time);
  time += 50;
}

setTimeout(() => {
  console.log('\n');
}, time);