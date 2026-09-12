"use strict";

const printNumbers = (from, to, interval) => {
  let now = from;

  const timerId = setInterval(() => {
    console.log(now);

    if (now === to) {
      clearInterval(timerId);
    }
    now++;
  }, interval);
};

printNumbers(1, 5, 1000);

const printNumbersByTimeout = (from, to, interval) => {
  let now = from;

  setTimeout(function func() {
    console.log(now);
    if (now < to) {
      setTimeout(func, interval);
    }
    now++;
  }, interval);
};

printNumbersByTimeout(6, 10, 1000);
