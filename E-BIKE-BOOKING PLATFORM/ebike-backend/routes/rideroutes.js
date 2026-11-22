const express = require('express')
const router = express.Router()
const rctrl = require("../controllers/rideControllers")


router.post("/",rctrl.createride)

router.get("/",rctrl.showallride)

router.get("/:id",rctrl.singelride)

router.put("/:id",rctrl.updateride)

router.delete("/:id",rctrl.deleteride)

module.exports = router;

