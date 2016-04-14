var express=require('express'),
    mongo=require('mongoose'),
    bodyParser = require('body-parser'),
    Meetupcontroller=require('./server/controllers/meetups-contoller');
var app= express();
app.use(bodyParser());

mongo.connect('mongodb://localhost:27017/contactlistapp');

app.use("/public", express.static(__dirname+'/public'));
app.use("/node_modules", express.static(__dirname+'/node_modules'));

app.get('/', function(req, res){
	res.sendfile('./public/index.html');
})

app.get('/contactlist', Meetupcontroller.list);
app.get('/contactlist/:id', Meetupcontroller.editlist);
app.post('/contactlist/:id', Meetupcontroller.updatelist);
app.post('/contactlist',Meetupcontroller.createlist);
app.delete('/contactlist/:id',Meetupcontroller.deletelist);
app.listen(3000,function()
{
	console.log("hi buddy");
})