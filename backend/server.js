const express = require('express');
var request =require("request");
const cors =require("cors");
const db =require("./serve");
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req, res) => res.send('Hello  guys! if you want data go to /getdata'))

app.get("/getdata",(req,res)=>{
	res.json(db);
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

