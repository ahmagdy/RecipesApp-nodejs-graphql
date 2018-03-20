import express from 'express'


const app = express()

app.all('*',(req,res)=> {
    res.status(404).json({message:'UnRecognized Route'});
});


export default app