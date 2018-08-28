module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const favsBooklistSchema=new Schema({
        UID:{type:Schema.Types.ObjectId,ref:'User'},
        bookId:[{type:Schema.Types.ObjectId,ref:'Booklist'}]
    })
    return mongoose.model('FavsBooklist',favsBooklistSchema)
}