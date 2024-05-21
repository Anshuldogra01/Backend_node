const express=require('express');
const mongoose=require('mongoose');
const Routes= require('./Routes/bookRoutes');


const app=express();
const port=3004;

mongoose.connect('mongodb://localhost:27017/Books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/book', Routes);

app.listen(port, ()=>{
    console.log("server is running ");
})