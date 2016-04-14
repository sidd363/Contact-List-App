var MEETUP=require('../models/model');

module.exports.createlist=function(req,res){

	var meetup=new MEETUP(req.body);
	meetup.save(
		function(err)
	   {
		    if(err)
			{res.json({msg:"error"});

	}
	          MEETUP.find({},function(err,results)
	          {
		//console.log(results);
	               	res.json(results);
	        	}
	 	);
	} );
	
}
module.exports.list=function(req,res){
	//console.log(MEETUP);
	MEETUP.find({},function(err,results)
	{
		//console.log(results);
		res.json(results);
		});
	
}
module.exports.deletelist=function(req,res){
	var id=req.params.id;
	console.log(id);
	MEETUP.remove({_id:id},function(err)
		{
			if(!err)
			{	console.log("deleted");
			MEETUP.find({},function(err,results)
	       {
		//console.log(results);
		res.json(results);
		})
		}
	
			else 
				console.log("not deleted");
		});
	
}
module.exports.editlist=function(req,res){
	var id=req.params.id;


	MEETUP.find({_id:id},function(err,results)
		{
			if(!err)
			{	
				
			    res.json(results);
			
		}
	
			else 
				console.log("not edited");
		});
	
}

module.exports.updatelist=function(req,res){
	var id=req.params.id;
	console.log(id);
	console.log(req.name);
	MEETUP.update({_id:id},{$set:{ name:req.body.name,email:req.body.email,contact_no:req.body.contact_no }},function(err,results)
		{
			if(!err)
			{	
				console.log("updated");
			   MEETUP.find({},function(err,results)
	       {
		
		   res.json(results);
		})
			
		}
	
			else 
				console.log("not updated");
		});
	
}