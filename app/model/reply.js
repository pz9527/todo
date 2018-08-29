module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const replySchema=new Schema({
        fromId:{type:Schema.Types.ObjectId,ref:'User'},
        toId:{type:Schema.Types.ObjectId,ref:'User'},
        content:{type:String,require:true},
        creatAt:{type:Date,default:true}
    })
    return mongoose.model('Reply',replySchema)
}