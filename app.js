const express = require('express');
// const https = require('https');
const path = require('path');
const fs = require('fs');
// const mongoose = require('mongoose');
// const db = require(__dirname + '/database.js');

const app = express();

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(path.join(__dirname, 'db')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.redirect('/kz')
});

app.get('/kz', function(req, res){
  let chapters = fs.readFileSync(__dirname + '/db/chapters.json');
  chapters = JSON.parse(chapters).chapters;
  let intro = fs.readFileSync(__dirname + '/db/intro.json');
  intro = JSON.parse(intro);
  let language = 'kz';
  res.render('main', {language:language, chapters:chapters, intro:intro});
  // const chapters = db().find({}, '-_id -__v').sort('chapter_id');
  // chapters.then(surahs=>{
  //   res.render('main', {chapters:surahs});
  // });
});

app.get('/ru', function(req, res){
  let chapters = fs.readFileSync(__dirname + '/db/chapters.json');
  chapters = JSON.parse(chapters).chapters;
  let intro = fs.readFileSync(__dirname + '/db/intro.json');
  intro = JSON.parse(intro);
  let language = 'ru';
  res.render('main', {language:language, chapters:chapters, intro:intro});
});
//
app.get('/sura', function(req, res){
  let id = req.query.id;
  let language = id.slice(-2);
  id = id.slice(0, -2);
  let chapter = fs.readFileSync(__dirname + `/db/${id}.json`);
  chapter = JSON.parse(chapter).verses;
  let chapters = fs.readFileSync(__dirname + '/db/chapters.json');
  chapters = JSON.parse(chapters).chapters;
  res.render('sura', {language:language, id:id, chapter:chapter, chapters: chapters});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => {
  console.log('listening on port '+port);
});
