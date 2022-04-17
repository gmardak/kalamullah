const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/quran', (err, db) => {
  if (err) throw err;
  console.log('DB is created');
});

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  console.log('phase 1');
  let surahs = fs.readFile('db/surah.json', (err, data) => {
    // if (err) throw err;
    let chapters = JSON.parse(data);
    // console.log('data ' + data);
    // console.log('phase 2');
    console.log(Object.keys(chapters).length);
  });
  // const chaptersURL = 'https://api.quran.com/api/v3/chapters';
  // https.get(chaptersURL, function(response){
  //   var quran = '';
  //   response.on('data', function(data){
  //     quran += data;
  //   });
  //   response.on('end', function(){
  //     quran = JSON.parse(quran);
  //     var suraID = []
  //     var suraEnglish = [];
  //     var revelationPlace = [];
  //     var suraArabic = [];
  //     var ayatNumber = [];
  //     for(let i = 0; i < quran.chapters.length; i++){
  //       suraID.push(quran.chapters[i].id);
  //       suraEnglish.push(quran.chapters[i].name_simple);
  //       revelationPlace.push(quran.chapters[i].revelation_place);
  //       suraArabic.push(quran.chapters[i].name_arabic);
  //       ayatNumber.push(quran.chapters[i].verses_count);
  //       // chapters.push(chapterInfo(quran.chapters[i].name_simple, quran.chapters[i].name_arabic, quran.chapters[i].revelation_place, quran.chapters[i].verses_count));
  //     }
  //     res.render('main', {suraID:suraID, suraEnglish: suraEnglish, revelationPlace:revelationPlace, suraArabic:suraArabic, ayatNumber:ayatNumber});
  //   });
  // });
});
//
// app.get('/sura', function(req, res){
//   // const options = {
//   //   'method':'GET',
//   //   'hostname':'api.quran.com',
//   //   'port':null,
//   //   'path':'/api/v3/chapters/100/verses',
//   //   'header':{}
//   // };
//   //
//   // var req = https.request(options, function(response){
//   //   var chunks = [];
//   //
//   //   response.on('data',function(chunk){
//   //     chunks.push(chunk);
//   //   });
//   //   response.on('end', function(){
//   //     var body = Buffer.concat(chunks);
//   //     console.log(body.toString());
//   //   });
//   // });
//   // req.write("{}");
//   // req.end();


//   let id = req.query.id;
//   const chapterURL = 'https://api.quran.com/api/v3/chapters/'+id+'/verses';
//   https.get(chapterURL, function(response){
//     var chapter = '';
//     response.on('data', function(data){
//       chapter += data;
//     });
//     response.on('end', function(){
//       chapter = JSON.parse(chapter);
//       var verseKey = [];
//       var verses = [];
//       console.log(chapter.verses.length);
//       for(let i = 0; i < chapter.verses.length; i++){
//         verseKey.push(chapter.verses[i].verse_key);
//         verses.push(chapter.verses[i].text_madani);
//       }
//       res.render('sura', {verseKey:verseKey, verses:verses});
//     });
//   });
// });


app.listen(port, () => {
  console.log('listening on port '+port);
});
