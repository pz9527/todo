module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const favsBooklistSchema = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        booklistId: [{ type: Schema.Types.ObjectId, ref: 'Booklist' }]
    })
    return mongoose.model('FavsBooklist', favsBooklistSchema)
}