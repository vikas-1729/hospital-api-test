const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }
});

const userModel=mongoose.model('userModel',UserSchema);

module.exports=userModel;