// generator
console.log('generator');
const fibonacci = {
  [Symbol.iterator]: function*() {
    let pre = 0, cur = 1;
    for (;;) {
      const temp = pre;

      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (const n of fibonacci) {
  if (n > 100)
    break;
  console.log(n);
}

// async-await
console.log('------------------------');
console.log('async/await');

function tick() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Date.now() / 1000));
    }, 1000);
  });
}

async function count3sec() {
  let time = await tick();
  console.log(time);
  time = await tick();
  console.log(time);
  time = await tick();
  console.log(time);
}

count3sec();
