module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const favsBookSchema = new Schema({
        book: [{ bookId: { type: Schema.Types.ObjectId, ref: 'Book' }, stauts: { type: Number, default: 0 } }],
        userId: { type: Schema.Types.ObjectId, reg: 'User' }
    })
    return mongoose.model('FavsBook', favsBookSchema)
}