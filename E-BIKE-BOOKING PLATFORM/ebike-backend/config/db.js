const mongoose = require("mongoose")

const connectdb = async()=>{

    await mongoose.connect(process.env.dburl)
    console.log("mongodb connect")

}
module.exports = connectdb;