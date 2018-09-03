module.exports=app=>{
    const mongoose=app.mongoose;
    const Schema=mongoose.Schema
    const booklistType=new Schema({
        listType:String
    })
    return mongoose.model('TistType',booklistType)
}