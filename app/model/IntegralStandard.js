module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema= mongoose.Schema;
    const ObjectId=Schema.Types.ObjectId
    const inteStandSchema=new Schema({
        itemName:String,
        score:Number
    })
    return mongoose.model('IntegStand',inteStandSchemaS)
}