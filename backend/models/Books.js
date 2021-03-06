const {Schema,model} =require('mongoose');


const ASchema=new Schema(
    {
        tittle:{ type:String,required:true },
        author:{ type:String,required:true },
        isbn:{ type:String, required:true },
        imagePath:{type:String, required:false},
        created_at:{type:Date,default:Date.now }
    });

module.exports=model('Books',ASchema);

