const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes');
const cors = require('cors');

//to connect mongoDB
const localhost = `mongodb+srv://vignesh:task123@task.xexui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` || "mongodb://localhost:27017/hotel" ;
mongoose.connect(
    localhost,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    },
      () => {
        console.log("Database Connected");
    }
)

//middelware
app.use(express.json()); //bodyparser to parse incoming and outgoing requests
app.use(cors())
app.use('/hotelApi', routesUrls); //appending routes url to /app path

//hosting server
app.listen(5000 ,() => {
    console.log("Server is running");
})