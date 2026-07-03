const express = require('express')
const app = express()
const PORT = 4001;

//web server:
app.use(express.static("frontend"))

app.listen(PORT,function(){
    console.log("Hey I am running at http://localhost:"+PORT)
})
