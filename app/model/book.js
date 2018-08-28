module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema= mongoose.Schema;
    const BookSchema=new Schema({
        UID:String,
        title:String,
        author:String,
        countWord:Number,
        updateAt:Date,
        source:[{siteName:String,hosts:String,defaultSource:Boolean}],
        tags:[{type:Schema.Types.ObjectId,ref:'Tag'}],
        personalTag:[{tag:String,UID:{type:Schema.Types.ObjectId,ref:'User'}}],
        status:[{code:Number,deadLine:Date}]
    })
    return mongoose.model("Book",BookSchema)
}