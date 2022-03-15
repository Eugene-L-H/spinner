const animation = '|/-\\|';

let count = 0
let delay = 150;
while (count < 5) {
  let currentFrame = animation[count];
  setTimeout(() => {
    process.stdout.write(`\r${currentFrame}   `);
  }, delay);

  count++;
  delay += 200;
}

setTimeout(() =>{
  process.stdout.write('\r ');
  console.log();
}, 1500);
