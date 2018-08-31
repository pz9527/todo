module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const ObjectId=Schema.Types.ObjectId
    const blCommentSchema=new Schema({
        createrId:{type:ObjectId,ref:'User'},
        content:{type:String,require:true},
        creatAt:{type:Date,default:Date.now()},
        booklistId:{type:ObjectId,ref:'Booklist'},
        status:Number,
        favs:[{type:ObjectId,ref:'User'}]
    })
    return mongoose.model('BLComment',blCommentSchema)
}