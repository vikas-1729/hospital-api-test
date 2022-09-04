const userModel = require('../models/user');
const helper = require('../Utils/helper');
const jwt = require('jsonwebtoken');
const validator = require('validator');
// module.exports.signup = async function signup( req,res){
//         const {email,password,name} = req.body;

//         try{
//             let result = await userModel.find({email:email});
//             if(result.length){
//                 return res.status(400).json({
//                     success:false,
//                     message:'Email Already Exist!!'
//                 });
//             }

//             const hashPassword = await helper.bycryptPassword(password);

//             console.log('pass',hashPassword);

//             result = await userModel.create({email:email,password:hashPassword,name:name});

//             return res.status(200).json({
//                 success:true,
//                 data:result
//             });
//         }catch(e)
//         {
//             return res.status(500).json({
//                 success:false,
//                 mssg:e.message
//             })

//         }
// };

// module.exports.login = async function login(req,res){
//     const {email,password} = req.body;

//     try{

//         let result = await userModel.find({email:email});
//         if(result.length == 0){
//             return res.status(400).json({
//                 success:false,
//                 message:'invalid username or passwords!!'
//             });
//         }

//         let resp = result[0];

//         result = await helper.comparePassword(resp.password,password);
//         if(!result)
//         {
//             return res.status(400).json({
//                 success:false,
//                 message:'invalid username or passwords!!'
//             });
//         }

//         const token = jwt.sign({email:resp.email,id:resp._id},'abcd$#',{expiresIn:60*60*60});
//         return res.status(200).json({
//             success:true,
//             message:'login successfully',
//             token:token
//         });

//     }catch(e)
//     {
//         return res.status(500).json({
//             success:false,
//             mssg:e.message
//         });

//     }
// };

// module.exports.home = async function(req,res){
//     res.send('welcome !!!');
// }

// module.exports.logout = async function logout(req,res){

// };

module.exports.signup = async function signup(req, res) {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(402).json({
        success: 'false',
        mssg: 'Invalid Input',
      });
    }

    //email -->
    if (!validator.isEmail(email)) {
      return res.status(402).json({
        success: 'false',
        mssg: 'Invalid Input',
      });
    }
    //email name password --->

    //email
    let data = await userModel.find({ email: email })[0];
    if (data) {
      return res.status(402).json({
        success: 'false',
        mssg: 'Invalid Input',
      });
    }
    let hashPassword = await helper.bycryptPassword(password);
    data = await userModel.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      mssg: e.message,
    });
  }
};

module.exports.login = async function login(req, res) {
  const { email, password } = req.body;
  try {
    console.log('email', email);
    let data = await userModel.findOne({ email: email });
    console.log('data', data);
    if (!data) {
      return res.status(402).json({
        success: 'false',
        mssg: 'Invalid Input1',
      });
    }

    let comparePassword = await helper.comparePassword(data.password, password);
    if (!comparePassword) {
      return res.status(402).json({
        success: 'false',
        mssg: 'Invalid Input2',
      });
    }
    return res.status(200).json({
      success: true,
      data: data,
      isMiddleware: 'req.body.isMiddleware',
    });
  } catch (error1) {
    console.log('err', error1);
    return res.status(500).json({
      success: false,
      mssg: error1.message,
    });
  }
};
