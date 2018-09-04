module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId
    const blBookSchema = new Schema({
        booklistId: { type: ObjectId, ref: 'Booklist' },
        bookId: { type: ObjectId, ref: 'Book' },
        score: { type: Number, require: true },
        reason: String,
        pushAt: Date,
        favs: [{ type: ObjectId, ref: 'User' }],
    })
    return mongoose.model('BlBook', blBookSchema)
}