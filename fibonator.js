"use strict";

function coroutine(g) {
  const it = g();
  return argument => it.next(argument);
}

function* fibonator() {
  let current = 0, next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const run = coroutine(fibonator);

for (let i = 0; i < 15; i++) {
  console.log(run().value);
}

// JOZKA: Tohle je opravdu hezke, nemam pripominky ;)
