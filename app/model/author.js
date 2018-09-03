module.exports=app=>{
    const mongoose =app.mongoose
    const Schema= mongoose.Schema;
    const ObjectId=Schema.Types.ObjectId
    const authorSchema=new Schema({
        name:String,
        lever:Number
  })
  return mongoose.model('Author',authorSchema)
}