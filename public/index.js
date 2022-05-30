$(document).ready(function(){
  $('.tafseer').slideUp();
  $('.transcript').slideUp();
  $('.tafseer').removeClass('text-invisible');
  $('.transcript').removeClass('text-invisible');
  let chapterNumberWithZeros = getNumbersWithZeros(chapterId);
  for(let i = 0; i < audioData.length; i++){
    let verseNumberWithZeros = getNumbersWithZeros(i+1);
    $('#icon_translation_'+i).click(()=>{
      $('#translation_'+i).slideToggle();
    });
    $('#icon_tafseer_'+i).click(()=>{
      $('#tafseer_'+i).slideToggle();
    });
    $('#icon_transcript_'+i).click(()=>{
      $('#transcript_'+i).slideToggle();
    });
    $('#ayat_play_'+i).click(async function(){
      let urlNumber = chapterNumberWithZeros.toString()+verseNumberWithZeros.toString();
      var audio = new Audio(`https://dl.salamquran.com/ayat/afasy-murattal-192/${urlNumber}.mp3`);
      audio.type = 'audio/mp3';

      try {
        await audio.play();
      }catch(err){
        console.log(err);
      }

    });
    for(let j = 0; j < audioData[i]; j++){
      let wordNumberWithZeros = getNumbersWithZeros(j+1);
      $(`#word_id_${i}_${j}`).click(async function(){
        var audio = new Audio(`https://dl.salamquran.com/wbw/${chapterNumberWithZeros}/${chapterNumberWithZeros}_${verseNumberWithZeros}_${wordNumberWithZeros}.mp3`);
        audio.type = 'audio/mp3';

        try {
          audio.play();
        }catch(err){
          console.log(err);
        }
      });
    }
  }
});

function getNumbersWithZeros(numbers){
  let numbersWithZeros;
  switch(numbers.toString().length){
    case 1:
      numbersWithZeros = `00${numbers}`;
      break;
    case 2:
      numbersWithZeros = `0${numbers}`;
      break;
    case 3:
      numbersWithZeros = numbers;
      break
  };
  return numbersWithZeros;
}

var lastScrollTop = 0;

window.addEventListener('scroll', function(){
  var st = window.scrollY || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    document.querySelector('.navbar').style.marginTop = '-55px';
  }
  else{
    document.querySelector('.navbar').style.marginTop = '0px';
  }
  lastScrollTop = st <= 0 ? 0 :st;
}, false);

window.onscroll = ()=>{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  $(".progress-bar").css('width', scrolled+'%');
}
