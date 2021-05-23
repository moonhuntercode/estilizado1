const express=require('express');

//inicializations
const app=express();
const morgan=require('morgan');
const multer=require('multer');
const path=require('path')
//settings
app.set('port', 4000)


//Middlewares
app.use(morgan('dev'));
multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads')
})
app.use(multer())

//start the server
app.listen(app.get('port'), () =>{
console.log('Server on port', app.get('port'));
} )