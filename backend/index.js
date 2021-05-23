const express=require('express');

//inicializations
const app=express();
const morgan=require('morgan');
const multer=require('multer');
const path=require('path');
const { dirname } = require('path/posix');
//settings
app.set('port', 4000)


//Middlewares
app.use(morgan('dev'));
const storage=multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime()+path.extname( file.originalname));
    }
})
app.use(multer({storage}).single())
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// Routes
app.use('/api/books', require('./routes/books'));

// Static files
app.use(express.static(path.join(__dirname,'public' )));
//start the server
app.listen(app.get('port'), () =>{
console.log('Server on port', app.get('port'));
} )