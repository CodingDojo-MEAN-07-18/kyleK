const express = require('express');
const path = require('path'); app.use(express.static(path.join(__dirname, '/authors/dist')))
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/authors/dist'))
mongoose.connect('mongodb://localhost:27017/authors', { useNewUrlParser : true});

const { Schema } = mongoose();
const QuoteSchema = new Schema({
  quote: {
    type: string,
    required : [true, "Quote must have content"]
  }
})

app.listen(port,() => {
  console.log(`currently listening on ${ port }!`)
})

app.use('/', ()=> {

})
