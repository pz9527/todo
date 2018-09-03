module.exports=app=>{
    const mongoose =app.mongoose
    const Schema= mongoose.Schema;
    const ObjectId=Schema.Types.ObjectId
    const noticeSchema=new Schema({
        toId:{type:ObjectId},
        content:String
  })
  return mongoose.model('Notice',noticeSchema)
}