module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const attentBook=new Schema({
        bookId:{type:Schema.Types.ObjectID,ref:'Book'},
    })
}