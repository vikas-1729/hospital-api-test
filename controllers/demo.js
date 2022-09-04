var doctor = require('../models/doctor');
var patient = require('../models/patient');
var report = require('../models/reports');

module.exports.start = async function start(req,res){
    var doctorObject = {
        name:'Taru',
        email:'doctor@gmail.com',
        password:'123'
    };


    var patientObject = {
        name:'Anisha',
        email:'patient@gmail.com',
        password:'123'
    };

    var reportObject = {
        patient_id:'62aeedcca1a28601d8e0fbf9',
        doctor_id:'62aeec03bc24a8ef1d5afdab',
        status:'negative'
    };


    // doctor.create(doctorObject,function(err,data){
    //     if(err){
    //         console.log('err',err.message);
    //         return;
    //     }
    //     console.log('data',data);
    // });

    
    // var tempPromise = doctor.create(doctorObject);
    // tempPromise.then((data) => {
    //       console.log('data',data);
    // }).catch(err => console.log('err'));


    // try {
    //     var res = await patient.create(patientObject);
    //     console.log('data',res);
    // } catch (error) {
    //     console.log('err',error.message);
    // }
    try {
        var doctorObject = await doctor.findOne({'email':'doctor@gmail.com'}).exec();
        console.log('a',doctorObject);
        doctorObject.name = 'new taru';
        await doctorObject.save();
        var doctorObject1 = await doctor.find({'email':'doctor@gmail.com'});
        return res.status(200).json({
            success:true,
            data:doctorObject1
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
