module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const favsBookSchema=new Schema({
        bookId:[{type:Schema.Types.ObjectId,ref:'Book'}],
        userId:{type:Schema.Types.ObjectId,reg:'User'}
    })
    return mongoose.model('FavsBook',favsBookSchema)
}