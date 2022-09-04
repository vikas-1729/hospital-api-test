var mongoose = require('mongoose');
var dotenv = require("dotenv").config();

module.exports.makeConnection = function makeConnection()
{
    mongoose.connect(process.env.mongoDBUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
    );
}


// const db  = mongoose.connection;

// db.on('error',(err)=>{
//     console.error('err is',err);
// });

// db.on('open',()=>{
//     console.log('connected to db')
// });

// module.exports.db = db;
