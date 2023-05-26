
const express = require("express");
const db = require('./db/db.js');
const cors = require("cors")
const Routes = require("./routes/route.js")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);


const PORT = 8000;

db();

app.listen(PORT,()=>
console.log(`server is running on PORT ${PORT}`)
)