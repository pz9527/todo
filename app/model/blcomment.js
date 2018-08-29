module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const blCommentSchema=new Schema({
        createrId:{type:Schema.Types.ObjectId,ref:'User'},
        content:{type:String,require:true},
        creatAt:{type:Date,default:Date.now()},
        booklistId:{type:Schema.Types.ObjectId,ref:'Booklist'}
    })
    return mongoose.model('BLComment',blCommentSchema)
}