module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema;
    const userSchema=new Schema({
        UID:{type:String,indexd:true},
        userName:String,
        infomation:{
            email:String,
            pwd:String,
            photo:String,
            sexed:Number,
            autograph:String,
            role:Number
        },
        status:{
            statusCode:Number,
            deadLine:Date,
            default:0
        },
        unread:{type:Number,default:0}
    })
    return mongoose.model('User',userSchema)
}