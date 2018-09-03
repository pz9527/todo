module.exports=app=>{
    const mongoose =app.mongoose
    const Schema= mongoose.Schema;
    const ObjectId=Schema.Types.ObjectId
    const booklistPraiseSchema=new Schema({
        bookId:{type:ObjectId,ref:'Booklist'},
        praiser:[{type:ObjectId,ref:'User'}],
        links:Number
  }) 
  return mongoose.model('BooklistPraise',booklistPraiseSchema)
}