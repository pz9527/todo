module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const blCommentSchema=new Schema({
        createrId:{type:Schema.Types.ObjectId,ref:'User'},
        content:{type:String,require:true},
        creatAt:{type:Date,default:Date.now()},
        booklistId:{type:Schema.Types.ObjectId,ref:'Booklist'},
        reply:[{
            content:{type:String,require:true},
            replyerId:{type:Schema.Types.ObjectId,ref:'User'},
            creatAt:{type:Date,defult:Date.now()}
        }],
        status:Number,
        favs:[{type:Schema.Types.ObjectId,ref:'User'}]
    })
    return mongoose.model('BLComment',blCommentSchema)
}