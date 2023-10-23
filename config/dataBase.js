const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/FlipKart');
const db = mongoose.connection;
db.on('connected',(err)=>{
    if(err){
        console.log('DB is not connected...!');
    }
    console.log('DB is connected...!');
});
module.exports = db;