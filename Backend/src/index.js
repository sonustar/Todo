const express = require('express');
const pool = require('../db/db.js')
require('dotenv').config();





const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.send(" Sample Port Setup !!")
})


app.listen(process.env.PORT,()=>{
  console.log(`App is running at port:3000`)
})



// First Simple things we need to do : 
/*




*/