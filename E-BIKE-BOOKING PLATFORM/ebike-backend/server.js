const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const connectdb = require("./config/db")
const rideroutes = require("./routes/rideroutes")

dotenv.config()
const app = express();
const port = process.env.PORT 
app.use(cors())
connectdb()
app.use(express.json())
app.use("/api/rides", rideroutes);

app.get('/',(req,res)=>{
    res.send("api is working");
});

app.listen(port,()=>{
    console.log("server is running port 5600");
})

