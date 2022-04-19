const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quran');
const chapterSchema = new mongoose.Schema({
  chapter_id: Number,
  name_kazakh: String,
  translation_kazakh: String,
  name_arabic: String,
  verses_count: Number,
  revelation_place: String
});
const Sura = mongoose.model('Chapter', chapterSchema);

module.exports = getDB;

function getDB(){
  return Sura;
}
