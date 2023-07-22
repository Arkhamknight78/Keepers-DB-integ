import express from 'express';
import body from 'body-parser';
import mongoose, { connect, model } from 'mongoose';


const app=express();
app.use(body.json);
connect('mongodb://127.0.0.1:27017/test');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

const NoteSchema={
    title:String,
    content:String
}
const Note=model("Note",NoteSchema);

app.get('/api',(req,res)=>{
    Note.find({}).then(function(foundnotes){
        res.json(foundnotes);
    }).catch((err)=>{
        console.log(err);
});
}
);