const Ride = require("../models/Ride")


exports.createride = async(req,res)=>{
    const {passengername,pickup,drop} = req.body;

    const ride = await Ride.create({passengername,pickup,drop});
    res.json(ride);
}


exports.showallride = async(req,res)=>{

    const rides = await Ride.find()
    res.json(rides);
}


exports.singelride = async(req,res)=>{

    const rides = await Ride.findById(req.params.id)
    res.json(rides);
}

exports.updateride = async(req,res)=>{

    const rides = await Ride.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(rides);
}

exports.deleteride = async(req,res)=>{

    await Ride.findByIdAndDelete(req.params.id)
    res.json({message:"rides delete"});
}