const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

app.use("/", (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.listen(8000, () => {
    console.log("Portfolio listening to 8000");
});