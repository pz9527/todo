module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId
    const inteStandSchema = new Schema({
        itemName: String,
        score: Number,
        limit: Number
    })
    return mongoose.model('IntegStand', inteStandSchema)
}