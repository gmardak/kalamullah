const express = require('express');
const https = require('https');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const port = 3000;

var schema = buildSchema(`
  type Query {
    hello: String
  }
  `);

var root = {
  hello: ()=>{
    return 'Hello World';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port)
console.log('Running GraphQL API server at 3000');

// graphql ({
//   schema,
//   source: '{hello}',
//   rootValue
// }).then((response)=>{
//   console.log(response);
// });


// app.use(express.static(__dirname));
//
// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/index.html');
// });
//
// app.get('/sura', function(req, res){
//   res.sendFile('__dirname'+'/fatiha.html')
//
//   // res.sendFile(__dirname + '/fatiha.html');
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
//
// app.listen(port, () => {
//   console.log('listening on port '+port);
// });
