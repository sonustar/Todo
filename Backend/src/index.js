const express = require('express');





const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.send(" Sample Port Setup !!")
})


app.listen(3000,()=>{
  console.log(`App is running at port:3000`)
})