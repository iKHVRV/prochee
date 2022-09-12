const pressMe = document.getElementById('activate');
const dr = document.getElementById('dr');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');

pressMe.addEventListener('click', () => setTimeout(hb, 1000));

function hb() {
  pressMe.style.display = 'none';
  dr.style.display = 'block';
}

let happy = setInterval(() => {
  if (dr.style.display == 'block') {
    text.classList.toggle('active');
    text2.classList.toggle('active2');
    dr.classList.toggle('active3');
  }
}, 1500);
