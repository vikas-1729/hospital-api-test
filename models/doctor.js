var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps:true
}
);

var doctor = mongoose.model('doctor',DoctorSchema);

module.exports = doctor;

