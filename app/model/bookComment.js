module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const bookCommentSchema=new Schema({
        bookId:{type:Schema.Types.ObjectId,ref:'Book'},
        userId:{type:Schema.Types.ObjectId,ref:'USer'},
        content:{type:String,require:true},
        score:Number,
        creatAt:{type:Date,default:Date.now()}
    })
}