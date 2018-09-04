
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId;
    const bookSourceSchema = new Schema({
        bookId: { type: ObjectId, ref: 'Book' },
        siteName: String,
        hosts: String,
        defaultSource: Boolean
    });
    return mongoose.model('BookSource', bookSourceSchema);
};