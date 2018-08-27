module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema;
    const userSchema=new Schema({
        userName:String,
        infomation:{
            email:String,
            pwd:String,
            photo:String
        }
    })
    return mongoose.model('user',userSchema)
}