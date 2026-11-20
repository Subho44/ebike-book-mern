const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
const app = express();
const port = process.env.PORT 
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("api is working");
});

app.listen(port,()=>{
    console.log("server is running port 5600");
})

