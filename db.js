const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const chapters = [];
for(i = 0; i < 3; i++){
  chapters.push({
    id: 1,
    revelation_place: 'Мекке',
    bismillah_pre: true,
    name_english: 'Fatiha',
    name_kazakh: 'Фатиха',
    name_arabic: 'الفاتحة',
    verses_count: 7,
    tralnslated_name_kazakh: 'Кітап Ашушы',
  });
}
console.log(chapters);



// mongoose.connect('mongodb://localhost:27017/quran', (err, db) => {
//   if (err) throw err;
//   console.log('DB is created or now using the DB');
// });
//
// const quranSchema = new mongoose.Schema({
//   quran: []
// });
//
//
// const chapterSchema = new mongoose.Schema({
//   id: Number,
//   revelation_place: String,
//   bismillah_pre: Boolean,
//   name_english: String,
//   name_kazakh: String,
//   name_arabic: String,
//   verses_count: Number,
//   tralnslated_name_kazakh: String,
// });

// const Quran = mongoose.model('Quran', quranSchema);
// const Chapter = mongoose.model('Chapter', chapterSchema);
//
// const quran = new Quran({
//   quran: []
// })

// const chapter = new Chapter({
//   id: 1,
//   revelation_place: 'Мекке',
//   bismillah_pre: true,
//   name_english: 'Fatiha',
//   name_kazakh: 'Фатиха',
//   name_arabic: 'الفاتحة',
//   verses_count: 7,
//   tralnslated_name_kazakh: 'Кітап Ашушы',
// });

// for(i = 0; i < 3; i++){
//   quran.push(new Chapter({
//     id: 1,
//     revelation_place: 'Мекке',
//     bismillah_pre: true,
//     name_english: 'Fatiha',
//     name_kazakh: 'Фатиха',
//     name_arabic: 'الفاتحة',
//     verses_count: 7,
//     tralnslated_name_kazakh: 'Кітап Ашушы',
//   }))
// }

//
// quran.save();



app.listen(port, () => {
  console.log('listening on port '+port);
});
