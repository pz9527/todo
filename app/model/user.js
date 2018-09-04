module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema;
    const userSchema=new Schema({
        userName:{type:String,index:true,unique:true},
        photo:String,
        role:Number,
        autograph:String,
        todayIntegral:Number,
        Integral:Number,
        status:{
            statusCode:{type:Number,default:0},
            deadLine:Date,
        },
        unread:{type:Number,default:0}
    })
    return mongoose.model('User',userSchema)
}