$(document).ready(function(){
  $('.tafseer').slideUp();
  $('.transcript').slideUp();
  $('.tafseer').removeClass('text-invisible');
  $('.transcript').removeClass('text-invisible');
});

var lastScrollTop = 0;

window.addEventListener('scroll', function(){
  var st = window.scrollY || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    document.querySelector('.navbar').style.marginTop = '-50px';
    document.querySelector('.class-progress-bar').style.marginTop = '-50px';
  }
  else{
    document.querySelector('.navbar').style.marginTop = '0px';
    document.querySelector('.class-progress-bar').style.marginTop = '0px';
  }
  lastScrollTop = st <= 0 ? 0 :st;
}, false);

$('.kalam').click(function(){
  var audio = new Audio('001_001_001.mp3');
  audio.play();
});

$('.icon-kazakh').click(function(){
  $('.kazakh-translation').slideToggle();
  $('.icon-kazakh').toggleClass('icon-kazakh-turnoff')
});

$('.icon-tafseer').click(function(){
  $('.tafseer').slideToggle();
  $('.icon-tafseer').toggleClass('icon-highlight')
});

$('.icon-transcript').click(function(){
  $('.transcript').slideToggle();
  $('.icon-transcript').toggleClass('icon-highlight')
});
