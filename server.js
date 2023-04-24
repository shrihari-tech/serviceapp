const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');
//env config
dotenv.config();
//rest object
const app = express()
app.use(express.json())
app.use(moragan('dev'))

//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        message:"server running",
    });
});
const port = process.env.PORT || 8080
//lister port
app.listen(port,()=>{
    console.log(`Server Running is ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
    .bgCyan.white
    )
});