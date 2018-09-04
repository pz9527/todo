module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const ObjectId = Schema.Types.ObjectId
    const searchHistorySchema = new Schema({
        UID: { type: ObjectId, ref: 'User' },
        content: String,
        createdAt: { type: Date, default: Date.now }
    })
    return mongoose.model('SearchHistory', searchHistorySchema)
}