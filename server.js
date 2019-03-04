const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes/api/index");



const app = express();

// use express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nyt";
mongoose.connect(MONGODB_URI);

// use routes

app.use(routes);

// Server static assets if in production

if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`server started on port ${port}`));