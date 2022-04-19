const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quran');

module.exports = getDB;

function getDB(){
  const chapterSchema = new mongoose.Schema({
    chapter_id: Number,
    name_kazakh: String,
    translation_kazakh: String,
    name_arabic: String,
    verses_count: Number,
    revelation_place: String
  });
  console.log('chapterSchemaaaaaaaa');
  console.log(chapterSchema);
  const Sura = mongoose.model('Chapter', chapterSchema);
  console.log('Suraaaaaaa');
  console.log(Sura);
  return Sura;
}
