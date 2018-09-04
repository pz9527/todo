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
        tags: { type: [String], index: true },
        personalTag: [{
            tag: [String],
            userId: { type: ObjectId, ref: 'User' }
        }],
    });
    return mongoose.model('Book', BookSchema);
};