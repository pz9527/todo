module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const bookTagSchema = new Schema({
    bookId: { type: ObjectId, ref: 'Book' },
    personalTag: [{
      tag: [String],
      userId: { type: ObjectId, ref: 'User' }
    }],
  });
  return mongoose.model('BookTag', bookTagSchema);
};