module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema= mongoose.Schema;
    const BookSchema=new Schema({
        UID:String,
        title:String,
        author:String,
        source:[{siteName:String,hosts:String,updateAt:Date}],
        tags:[{tag:String}],
        status:[{code:Number,deadLine:Date}]
    })
    return mongoose.model("Book",BookSchema)
}