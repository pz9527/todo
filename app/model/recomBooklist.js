//youshugonggao
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const recomBooklistSchema = new Schema({
    booklistId: { type: ObjectId, ref: 'Booklist' },
    type: String,
    name: String,
  });
  return mongoose.model('RecomBooklist', recomBooklistSchema);
};