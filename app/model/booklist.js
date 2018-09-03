module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema
    const booklistSchema=new Schema({
        creater:{type:Schema.Types.ObjectId,ref:'User'},
        createdAt:{type:Date,default:Date.now()},
        title:{type:String,require:true},
        content:{type:String,require:true},
        listType:String,
        collecttype:String
    })
    return mongoose.model('Booklist',booklistSchema)
}