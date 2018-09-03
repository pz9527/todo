module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema
    const booklistSchema=new Schema({
        book:[{
            bookId:{type:Schema.Types.ObjectId,ref:'Book'},
            score:{type:Number,require:true},
            reason:String,
            pushAt:Date,
            favs:[{type:Schema.Types.ObjectId,ref:'User'}],

            // hate:[{type:Schema.Types.ObjectId,ref:'User'}]
        }],
        creater:{type:Schema.Types.ObjectId,ref:'User'},
        creatAt:{type:Date,default:Date.now()},
        title:{type:String,require:true},
        content:{type:String,require:true},
        listType:String
    })
    return mongoose.model('Booklist',booklistSchema)
}