const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotel = new Schema({
    hotelName:{
        required:true,
        type:String
    },
    roomtype:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:String
    },
    from:{
        required:true,
        type:String
    },
    to:{
        required:true,
        type:String
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('hotel', hotel)