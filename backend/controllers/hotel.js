const hotel = require("../models/hotel.js");

//to get all hotel
let getAllhotel = async(req,res) => {
    try {
        const foundAll = await hotel.find({});
        res.status(200).json(foundAll);
    } catch (error) {
        res.status(500).json("SERVER ERROR");
    }
};

//save(create) the hotel data 
let savehotel = async(req,res) => {
    let { hotelName, roomtype, price, from, to } = req.body;
    try {
        const newhotel = new hotel({
          hotelName, roomtype, price, from, to
        });
        await newhotel.save();
        return res.status(201).json("success");
    } catch (error) {
        // console.error(err);
        res.status(500).json("SERVER ERROR");
    }
}

//to edit the hotel data by id
let edithotel = async(req,res) => {
    let { hotelName, roomtype, price, from, to } = req.body;
    try {
        let updatehotel = await hotel.findByIdAndUpdate(
            req.params.id,
            {
              hotelName, roomtype, price, from, to
            },
            { new: true }
          );
        // await (await updatehotel).save();
        return res.status(201).json(updatehotel);
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to delete the hotel data by id
let deletehotel = async(req,res) => {
    try {
        let deletebks = await hotel.findByIdAndDelete(req.params.id);
        // await (await updatehotel).save();
        return res.status(201).json(deletebks);
      } catch (err) {
        // console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to find the hotel data by id
let findhotel = async(req,res) => {
    try {
        let findBks = await hotel.findOne({ _id: req.params.id });
        // await (await updatehotel).save();
        return res.status(201).json(findBks);
      } catch (err) {
        // console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

//to find the hotel data by id
let usersId = async(req,res) => {
    try {
        let userIds = await hotel.find({ usersbook : req.params.id });
        // await (await updatehotel).save();
        if (userIds === []) {
            return res.status(401).json("Not found");
        }
        return res.status(201).json(userIds);
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
}

module.exports = {getAllhotel, savehotel ,edithotel ,deletehotel ,findhotel ,usersId};