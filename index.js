const express = require('express');
const app = express();
const port = 8000;
const apiRoute = require('./route/api/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}))




app.use('/api',apiRoute);



//homepage
app.get('/', function(req,res){

	res.send('This is the homepage');
})












app.listen(port, ()=>{

	console.log(`App is running on port ${port}.`)
});