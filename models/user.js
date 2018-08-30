var mongoose=require('../mongoose');
var schemaUser=new mongoose.Schema({
		name:{
		type:String,
		required:true,
		unique:true
	},
		age:{
		type:Number,
	}
	})
var User=mongoose.model("User",schemaUser);
module.exports=User;