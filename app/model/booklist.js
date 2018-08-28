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
            reply:[{
                createrId:{type:Schema.Types.ObjectId,ref:'User'},
                content:String,
                creatAt:{type:Date,default:Date.now()},
            }]
            // hate:[{trpe:Schema.Types.ObjectId,ref:'User'}]
        }],
        creater:{type:Schema.Types.ObjectId,ref:'User'},
        creatAt:{type:Date,default:Date.now()},
        title:{type:String,require:true},
        content:{type:String,require:true}
    })
    return mongoose.model('BookList',booklistSchema)
}