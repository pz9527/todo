module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const bookCommentSchema=new Schema({
        bookId:{type:Schema.Types.ObjectId,ref:'Book'},
        createrId:{type:Schema.Types.ObjectId,ref:'USer'},
        content:{type:String,require:true},
        score:Number,
        creatAt:{type:Date,default:Date.now()},
        status:Number,
        jurisdiction:Number
    })
    return mongoose.model('BookComment',bookCommentSchema)
}