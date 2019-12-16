const elTank = document.querySelector('.tank');
const elBullet = document.querySelector('.bullet');
const elBeam = document.querySelector('.beam');
const elBackward = document.querySelector('.bw');
const elForward = document.querySelector('.fw');
const elShoot = document.querySelector('.shoot');
const elLight = document.querySelector('.light');

elBackward.addEventListener('click', () => {
  elTank.classList.add('backward');
  elTank.classList.remove('forward');
});
elForward.addEventListener('click', () => {
  elTank.classList.add('forward');
  elTank.classList.remove('backward');
});
elShoot.addEventListener('click', () => {
  elBullet.classList.toggle('shot');
});
elLight.addEventListener('click', () => {
  elBeam.classList.toggle('beam_on');
});
