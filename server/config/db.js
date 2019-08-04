const mongoose =  require('mongoose')
const myURI = "mongodb+srv://khalid:gX3DJpxGEyfTxtjB@cluster0-svk4l.mongodb.net/test?retryWrites=true&w=majority";

const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI, { useNewUrlParser: true }, (err,client)=>{
    if(err){
        return console.log('Cannot connect',err)
    }
    return console.log('Connected to database')
})