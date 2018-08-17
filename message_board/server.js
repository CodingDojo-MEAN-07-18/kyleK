const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-sesion');
const { Schema } = mongoose;
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))



mongoose.connect('mongodb://localhost:27017/message_board', {useNewUrlParser : true})
mongoose.connection.on('connected', () => console.log('Connected to Mongoose!'))

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [ true, 'Name is required']},
    message: {type: String, required: [ true, 'message is required']},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Message = mongoose.model('Message', MessageSchema);


const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    comment: {type: String, required: true},
    _messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
})

const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', function(req, res) {
    Message.find()
}

app.post('/messages', function(req, res) {
    const newMessage = new Message({ name: req.body.name, message: req.body.message });
    newMessage.save(function(err) {
        if (err) { console.log(err) 
        } else {
            console.log("new message created");
            res.redirect('/');
        }
    })
})

app.listen(port, () => console.log(`listening on port ${ port }`));
