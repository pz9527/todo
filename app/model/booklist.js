module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema
    const bookListSchema=new Schema({
        bookId:[{type:Schema.Types.ObjectId,ref:'Book'}],
        creater:{type:Schema.Types.ObjectId,ref:'User'},
        creatAt:{type:Date,default:Date.now()},
        title:{type:String,require:true},
        content:{type:String,require:true}
    })
    return mongoose.model('BookList',bookListSchema)
}