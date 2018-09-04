module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    const ObjectId = Schema.Types.ObjectId
    const friendSiteSchema = new Schema({
        name: String,
        url: String
    })
    return mongoose.model('FriendSite', friendSiteSchema)
}