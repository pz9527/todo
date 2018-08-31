
module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema=mongoose.Schema;
    const bLComReplySchema=new Schema({
        bLComId:{type:Schema.Types.ObjectId,ref:'BLComment'},
        createrId:{type:Schema.Types.ObjectId,ref:'User'},
        content:String,
        createdAt:{type:Date,default:Date.now()},
    })
    return mongoose.model('BLComReply',bLComReplySchema)
}