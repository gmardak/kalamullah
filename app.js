const express = require('express');
const https = require('https');
const path = require('path');
const app = express();
const port = 3000;

function chapterInfo(englishName, arabicName, revelationPlace, numberOfAyats){
  return{
    englishName,
    arabicName,
    revelationPlace,
    numberOfAyats
  };
}

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  const chaptersURL = 'https://api.quran.com/api/v3/chapters';
  https.get(chaptersURL, function(response){
    console.log(response.statusCode);
    var quran = '';
    response.on('data', function(data){
      quran += data;
    });
    response.on('end', function(){
      quran = JSON.parse(quran);
      console.log(quran.chapters.length);
      var chapters = [];
      for(let i = 0; i < quran.chapters.length; i++){
        chapters.push(chapterInfo(quran.chapters[i].name_simple, quran.chapters[i].name_arabic, quran.chapters[i].revelation_place, quran.chapters[i].verses_count));
      }
      res.render('main', {nameEnglish: chapters[0].englishName, place: chapters[0].revelationPlace, sura_name: chapters[0].arabicName, amount: chapters[0].numberOfAyats});
    });
  });
});

// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
  // const chaptersURL = 'https://api.quran.com/api/v3/chapters';
  //
  // https.get(chaptersURL, function(response){
  //   console.log(response.statusCode);
  //   var chapters = '';
  //   response.on('data', function(data){
  //     chapters += data;
  //   });
  //   response.on('end', function(){
  //     console.log(JSON.parse(chapters));
  //   });
  // });
  //
  // res.sendFile(__dirname + '/index.html');

// });

// app.get('/sura', function(req, res){
//   res.sendFile(__dirname+'/fatiha.html')
//
//   // const url = 'https://api.quran.com/api/v3/chapters/fatiha/verses/1';
//   // https.get(url, function(response){
//   //   console.log(response.statusCode);
//   //   var info = '';
//   //   response.on('data', function(data){
//   //     info += data;
//   //   });
//   //
//   //   response.on('end', function(){
//   //     // var audioInfo = JSON.parse(info).verse.words[0].audio.url;
//   //     res.send('https://dl.salamquran.com/wbw/001/001_001_001.mp3');
//   //     // var audio = new Audio(audioInfo);
//   //     // audio.play();
//   //     // res.json(audioInfo);
//   //   });
//   // });
// });

app.listen(port, () => {
  console.log('listening on port '+port);
});
