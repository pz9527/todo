module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const tagSchema = new Schema({
        content: String,
        links: Number
    })
    return mongoose.model('Tag', tagSchema)
}