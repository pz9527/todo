module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    const BookSchema = new Schema({
        title: { type: String, index: true },
        author: String,
        countWord: Number,
        updateAt: Date,
        status: Number,
        score: Number,
        tags: { type: [String], index: true },
    });
    return mongoose.model('Book', BookSchema);
};