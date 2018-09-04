module.exports=app=>{
    const mongoose =app.mongoose
    const Schema= mongoose.Schema;
    const ObjectId=Schema.Types.ObjectId
    const messageSchema=new Schema({
        content:String,
        fromID:{type:ObjectId,ref:'User'},
        toID:{type:ObjectId,ref:'User'},
        createdAt:{type:Date,default:Date.now}
  })
  return mongoose.model('Message',messageSchema)
}