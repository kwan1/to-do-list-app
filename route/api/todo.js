const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/',function(req,res){
	//select * from list; psql
	db.select().from('list').orderBy('id').then(function(data){
		res.send(data);
	});	
});

router.post('/',function(req,res){
db.insert(req.body).returning('*').into('list').then(function(data){
	res.send(data);
});
//insert into table list then select everything from the table
//SELECT * FROM list WHERE id = inserted_row;
});


//INSERT INTO list(text,completed) VALUES(value,t/f);



router.patch('/:id', function(req,res){
db('list').where({id: req.params.id}).update(req.body).returning('*').then(function(data){
	req.send(data);
});

});
//localhost:3000/api/todo/1 eg url
//PUT IS TO UPDATE EVERYTHING OF THE TABLE (row)
router.put('/:id', function(req,res){
	//select * from list where id = ourId
  db('list').where({id: req.params.id}).update({
 	text:req.body.text || null,
	completed: req.body.completed || null
	}).returning('*').then(function(data){
	req.send(data);

});
});


router.delete('/:id', function(req,res){
	db('list').where({id:req.params.id}).del().then(function(){

		res.json({success:true});

	});
});

router.get('/:id',function(req,res){
db('list').where({id:req.params.id}).first().then(function(data){
	res.send(data);
});
});

module.exports = router;

//localhost:3000/api/todo