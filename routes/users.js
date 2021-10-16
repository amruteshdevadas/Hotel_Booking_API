var express = require("express");
var router = express.Router();
var data = require("../RoomsData");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/bookroom", (req, res, next) => {
  try {
    let roomId = req.body.room_Id;
    let roomData = data.find((item) => {
      return item.room_Id == roomId;
    });

    if (roomData.date === req.body.date && roomData.bookingStatus == true) {
      res.json({
        message: "Room Not Available on the date",
      });
    } else {
      roomData.reserved.from = req.body.from;
      roomData.reserved.to = req.body.to;
      roomData.bookingStatus = true;
      roomData.customerName = req.body.customerName;
      res.json({
        message: "Room booked Successfully..!",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
