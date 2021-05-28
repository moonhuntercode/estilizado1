const {Router}= require('express');
const router=Router();

const Book=require('../models/Books');

router.get('/',async (req,res)=>{
    const books= await Book.find()
    res.json(books);
});

router.post('/',async (req,res)=>{
    console.log(req.body);
    const {tittle, author, isbn}=req.body;
    const newBook=new Book({tittle, author, isbn});
    await newBook.save();
    res.json({message: 'book saved'});
});
router.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
const deletedBook= await Book.findByIdAndDelete(req.params.id );
console.log(deletedBook);
res.send('deleting');
});

module.exports=router;