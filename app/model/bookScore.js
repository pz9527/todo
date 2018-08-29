module.exports=app=>{
    const mongoose=app.mongoose
    const Schema=mongoose.Schema
    const bookScoreSchema=new Schema({
        bookId:{type:Schema.Types.ObjectId,ref:'Book'},
        avgscore:Number,
        scores:[{score:Number,scorerId:{type:Schema.Types.ObjectId,ref:'User'}}]
    })
    return mongoose.model('BookScore',bookScoreSchema)
}