const express=require('express');
const connectDb=require('./db/db');
const movieRouter=require('./routes/movie.routes');
const cors=require('cors');


const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDb();

//MiddleWare
app.use(cors({
    origin:'*',
    credentials:true
}));

app.use('/movie',movieRouter);

app.listen(4000,()=>{
    console.log('Connected to port 4000');   
})