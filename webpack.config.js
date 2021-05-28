const path=require('path');

module.exports={
    mode:'development',
    entry:'./frontend/app.js',
    output:{
        path: path.join(__dirname,'backend/public'),
        filename:'bundle.js'
    }
}