module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema= mongoose.Schema;
    const BookSchema=new Schema({
        title:String,
        author:String,
        source:[{siteName:String,hosts:String,updateAt:Date}],
        label:{type:Array},
        type:{type:String}
    })
    return mongoose.model("Book",BookSchema)
}