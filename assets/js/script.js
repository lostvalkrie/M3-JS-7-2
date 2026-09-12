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

const setImage = ({ message }) => {
  if (!article.contains(image)) {
    article.prepend(image);
  }
  image.src = `${message}`;
};

const article = document.createElement("article");
article.classList.add("dogs-article");

const image = document.createElement("img");
image.classList.add("dog-img");
image.alt = "random dog";

const generateDogBtn = document.createElement("button");
generateDogBtn.textContent = "Generate dog image";
generateDogBtn.classList.add("dogs-btn");
generateDogBtn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => setImage(data));
});

article.append(generateDogBtn);
document.body.append(article);

generateDogBtn.click();
