Array.from(document.querySelectorAll('.letter')).forEach((el) => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const slides = document.getElementsByClassName('slides');

// * Carousel
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

// * Paralax
window.addEventListener('scroll', () => {
  const active = document.querySelector('.active');
  const txt = document.querySelectorAll('.txt');
  const scroll = window.scrollY;

  active.style.transform = `translateY(-${scroll * 0.2}px)`;
  for (let text of txt) {
    text.style.transform = `translate(-50%, ${scroll * 0.6}%)`;
  }
});

// * Chaser
// ! Get boxes for both Chaser and Runner
const boxes = document.querySelectorAll('.box');

// Get Chaser
const chaser = document.querySelector('.chaser');

boxes[0].addEventListener('mousemove', (e) => {
  // Get bounding box
  const rect = e.currentTarget.getBoundingClientRect();

  let left = `${e.clientX - rect.left}px`;
  let top = `${e.clientY - rect.top}px`;

  chaser.style.left = left;
  chaser.style.top = top;
});

// * Runner
// Get Runner
const runner = document.querySelector('.runner');

boxes[1].addEventListener('mousemove', (e) => {
  // Get bounding box
  const rect = e.currentTarget.getBoundingClientRect();

  const runner_rect = runner.getBoundingClientRect();
  let distanceX = Math.abs(e.clientX - runner_rect.left);
  let distanceY = Math.abs(e.clientY - runner_rect.top);

  let left;
  if (distanceX < 70) {
    if (e.clientX < runner_rect.left) {
      left = `${e.clientX - rect.left + 150}px`;
    } else {
      left = `${e.clientX - rect.left - 150}px`;
    }
  }

  let top;
  if (distanceY < 70) {
    if (e.clientY < runner_rect.top) {
      top = `${e.clientY - rect.top + 80}px`;
    } else if (e.clientY > runner_rect.top + 50) {
      top = `${e.clientY - rect.top - 80}px`;
    }
  }

  if (runner_rect.left <= rect.left * 0.9) {
    runner.style.left = '50px';
  } else if (runner_rect.left >= rect.right) {
    runner.style.left = `${rect.right - 100}px`;
  } else {
    runner.style.left = left;
  }

  if (runner_rect.top <= rect.top) {
    runner.style.top = '50px';
  } else if (runner_rect.top >= rect.bottom) {
    runner.style.top = `${rect.bottom - 100}px`;
  } else {
    runner.style.top = top;
  }
});
