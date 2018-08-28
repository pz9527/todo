module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema=mongoose.Schema;
    const blacklistSchema=new Schema({
        UID:{type:Schema.Types.ObjectId,ref:'User'},
        list:[{type:Schema.Types.ObjectId,ref:'User'}]
    })
    return mongoose.model('Blacklist',blacklistSchema)
}