import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: mongoose.SchemaTypes.String, unique: true, required: true },
  pp: { type: mongoose.SchemaTypes.ObjectId, ref: 'Image' },
  name: { type: mongoose.SchemaTypes.String },
  words: [{type: mongoose.SchemaTypes.ObjectId, ref:'WordUser'}],
  birthdate: { type: mongoose.SchemaTypes.Date },
  surname: { type: mongoose.SchemaTypes.String },
  hash: { type: mongoose.SchemaTypes.String },
  salt: { type: mongoose.SchemaTypes.String },
});

const User = new mongoose.model('User', UserSchema);

export default User;