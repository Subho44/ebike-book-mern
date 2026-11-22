const mongoose = require("mongoose")

const rideschema = new mongoose.Schema(
    {
        passengername:{type:String, required:true},
        pickup:{type:String, required:true},
        drop:{type:String, required:true},
        drivername:{type:String, default:""},
        status:{
            type:String,
            enum:["booked","accepted","completed"]
        }

    },
    {timestamps:true}
);

module.exports = mongoose.model("Ride", rideschema);