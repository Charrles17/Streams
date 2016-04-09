var express = require('express');
var app = express();

app.get('/', function (req,res){
    res.send('Goodbye World!');
});

app.get('/Goodbye', function (req, res){
     res.send('Goodbye, Have a Great Day!');
});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port 3000!');
    });