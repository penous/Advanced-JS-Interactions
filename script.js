Array.from(document.querySelectorAll('.letter')).forEach((el) => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const slides = document.getElementsByClassName('slides');

function* generator() {
  while (true) yield* [0, 1];
}
const gen = generator();

const showSlides = () => {
  let counter = gen.next().value;
  for (let slide of slides) {
    slide.style.display = 'none';
    slide.classList.remove('active');
    // slide.firstElementChild.classList.remove('txt');
  }
  slides[counter].style.display = 'block';
  slides[counter].classList.add('active');
  //   slides[counter].firstElementChild.classList.add('txt');
  setTimeout(() => {
    showSlides();
  }, 3000);
};

showSlides();

window.addEventListener('scroll', () => {
  const active = document.querySelector('.active');
  const txt = document.querySelectorAll('.txt');
  const scroll = window.scrollY;

  active.style.transform = `translateY(-${scroll * 0.2}px)`;
  for (let text of txt) {
    console.log(text);
    text.style.transform = `translate(-50%, ${scroll * 0.6}%)`;
  }
});
