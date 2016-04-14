var mongoose=require('mongoose');
module.exports=mongoose.model('contactlistappcollections',{
	name:String,
	email:String,
	contact_no:String
}); 