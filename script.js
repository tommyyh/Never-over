const btn = document.querySelector('.overit');
const ok = document.querySelector('.ok');
const ne = document.querySelector('.ne');

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener('click', () => {
  const num = randomInteger(1, 2);

  if (num == 1) {
    ok.classList.add('ok1');
    ne.classList.remove('ne1');
  } else {
    ne.classList.add('ne1');
    ok.classList.remove('ok1');
  }
});
