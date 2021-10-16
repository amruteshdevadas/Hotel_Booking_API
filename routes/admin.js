var express = require("express");
var router = express.Router();
var data = require("../RoomsData");

router.post("/createroom", (req, res, next) => {
  try {
    let newRoom = data.find((room) => {
      return room.room_Id == req.body.roomInfo.room_Id;
    });
    if (newRoom) {
      res.json({
        message: "Room with same Id already Present..",
      });
    } else {
      let roomInfo = req.body.roomInfo;
      data.push(roomInfo);
      res.status(200).send("Room Created..!!");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/getAllRooms", (req, res, next) => {
  try {
    let roomArray = [];
  let roomData = data.map((room) => {
      const {
        room_Id,
        customerName,
        startTime,
        endTime,
        date,
        bookingStatus,
      }= room

      return {
        room_Id,
        customerName,
        startTime,
        endTime,
        date,
        bookingStatus,
      }
    });
    res.json(roomData);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/getAllUserDetails", (req, res, next) => {
  try {
    let userData = data.map((user) => {
      const {
        room_Id,
        customerName,
        startTime,
        endTime,
        date
      } = user

      return {
        room_Id,
        customerName,
        startTime,
        endTime,
        date
      }

    });
    res.json(userData);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
