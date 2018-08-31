module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema;
    const userInfoSchema=new Schema({
            userId:{type:Schema.Types.ObjectId,index:true},
            email:String,
            pwd:String,
            sexed:Number,
    })
    return mongoose.model('UserInfo',userInfoSchema)
}