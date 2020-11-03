let btn__next = document.querySelector('#btn__next');
let text = document.querySelectorAll('.header__text')
let img = document.querySelectorAll('.bg_img');
let header = document.querySelector('.header');
let i = 1;

// let btns = document.querySelectorAll('.header__slider-btn');

// btns.onclick = alert('3')

btn__next.onclick = changeSlide;

setInterval('changeSlide()', 5000); //Таймер зміни слайду 5сек




function changeSlide() {
  if (i >= img.length || i == undefined) i = 0;
  header.style.backgroundImage = 'url(' + img[i].src + ')'; //Активація поточного фонового зображення

  for (let j = 0; j < text.length; j++) { //Деактивація всіх текстових блоків
    text[j].style.display = 'none';
  }

  text[i].style.display = 'block'; //Активація поточного текстового блоку
  i++;
}


document.addEventListener('DOMContentLoaded', function () {
  for (let l = 0; l < text.length; l++) {
    document.getElementById('buttons').innerHTML += '<button class="header__slider-btn">';
  }
})