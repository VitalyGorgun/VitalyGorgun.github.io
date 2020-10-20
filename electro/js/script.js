
  ///Меню для малих екранів//
  let menuBtn = document.getElementById('top-menu__button'),
    menuLinks = document.getElementById("top-menu__links-box");

  //Функція приховування меню та зміни вигляду іконки меню
  menuBtn.onclick = function () {
    if (menuLinks.style.display === "block") {
      // menuLinks.style.display = "none";
      menuLinks.classList.toggle('top-menu__links-box_show');
      menuBtn.classList.toggle('active');
    } else {
      // menuLinks.style.display = "block";
      menuLinks.classList.toggle('top-menu__links-box_show');
      menuBtn.classList.toggle('active');
    }
  }

  ///Слайдер//
  let sliderImage = document.getElementsByClassName('slider__img'),//Массив зображень
    sliderItem = document.getElementsByClassName('slider__item'),//Массив слайдів
    activeSlide = 0;//Активний слайдер

  let sliderTimer = setInterval(nextSlide, 5000);//таймер перемикання слайдів

  //переміщення всіх зображеннь з HTML в CSS і встановлення градієнту поверх зображення
  for (i = 0; i < sliderImage.length; i++) {
    let imageUrl = sliderImage[i].src;
    sliderImage[i].style.display = 'none';
    sliderItem[i].style.backgroundImage = //значення rgba відповідають за градієнт поверх зображення
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('" + imageUrl + "')";
  }

  //стартове налаштування на показ першого слайдера
  for (let i = 1; i < sliderItem.length; i++) {
    sliderItem[i].classList.add('hidden');
  }

  //функція зміни слайду на
  function nextSlide() {
    hideAllSlides();
    if (activeSlide < sliderItem.length - 1) {
      activeSlide++;
      sliderItem[activeSlide].classList.remove('hidden');
    } else {
      activeSlide = 0;
      sliderItem[activeSlide].classList.remove('hidden');
    }
  }

  function prevSlide() {
    hideAllSlides();
    if (activeSlide > 0) {
      activeSlide--;
      sliderItem[activeSlide].classList.remove('hidden');
    } else {
      activeSlide = sliderItem.length - 1;
      sliderItem[activeSlide].classList.remove('hidden');
    }
  }

  //функція приховування всіх слайдів
  function hideAllSlides() {
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.add('hidden');
    }
  }

  //обробка кнопок перемикання слайдів
  let prevSlideBtn = document.getElementById('prev-slide'),
    nextSlideBtn = document.getElementById('next-slide');

  prevSlideBtn.onclick = function () {
    prevSlide();//виклик функції відображення попереднього слайду
    clearInterval(sliderTimer);//скидання таймеру
    sliderTimer = setInterval(nextSlide, 5000);//повторний запуск таймеру
  }

  nextSlideBtn.onclick = function () {
    nextSlide();//виклик фунції відображення наступного слайду
    clearInterval(sliderTimer);//скидання таймера
    sliderTimer = setInterval(nextSlide, 5000);//і повторний запуск таймера
  }
