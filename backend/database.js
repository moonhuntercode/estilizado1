const  mongoose  = require("mongoose");
// console.log(process.env.MONGODB1);

mongoose.connect(process.env.MONGODB1,{
    useNewUrlParser:true
})
    .then(db => console.log('db is connect'))
    .catch(err => console.error(err));