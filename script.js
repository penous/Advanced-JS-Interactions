Array.from(document.querySelectorAll('.letter')).forEach((el) => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function* generator() {
  while (true) yield* [0, 1, 2];
}
const gen = generator();

const showSlides = () => {
  const slides = document.getElementsByClassName('slides');
  let counter = gen.next().value;
  for (let slide of slides) {
    slide.style.display = 'none';
  }
  slides[counter].style.display = 'block';
  setTimeout(() => {
    showSlides();
  }, 3000);
};

showSlides();
