var doctorModel = require('../models/doctor');
var validator = require('validator');
var helper = require('../Utils/helper');

module.exports.doctorCreate = async function doctorCreate(req,res){
    //required
    const doctorBody  = req.body;

    doctorBody.email = doctorBody.email.trim();
    //required fields
    if(!doctorBody.name){
       return res.status(401).json({
            'success':false,
            'message':'Name is required field'
        })
    }

    if(!doctorBody.email || !doctorBody.password){
       return  res.status(401).json({
            'success':false,
            'message':'Email ,Password is required field'
        })
    }

    if(!validator.isEmail(doctorBody.email)){
        return  res.status(401).json({
            'success':false,
            'message':'Not a valid email'
        });
    }

    // email id 
    try {
        var result = await doctorModel.find({'email':doctorBody.email});
        if(result){
            return res.status(401).json({
                'success' :false,
                'message':'Email is already used'
            });
        }

        var result = await doctorModel.create(doctorBody);
        return res.status(200).json({
            'success' :true,
            'data': result
        });    
    } catch (error) {
        return res.status(500).json({
            'success' :false,
            'message':error.message
        })    
    }
}



module.exports.doctorReadAll = async function doctorRead(req,res){
   try {
    var doctorList = await doctorModel.find({});
    if(!Array.isArray(doctorList))
    {
        return res.status(403).json(helper.failureJson('doctor list is not array'));

    }
    console.log('a',doctorList);
    return res.render('doctor',{
        'doctorList':doctorList
    });

   } catch (error) {
        let errorObj = helper.failureJson(error.message);
        return res.json(500).json(errorObj);
   }
    

}

module.exports.doctorRead = async function doctorReadAll(req,res){
    
    return res.render('doctor',{'title':'hello'});
}

module.exports.doctorUpdate = async function doctorUpdate(req,res){
    res.send('updated');
}


module.exports.doctorDelete = async function doctorDelete(req,res){
    res.send('deleted');
}

