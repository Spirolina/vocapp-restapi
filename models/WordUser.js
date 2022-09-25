import mongoose from 'mongoose';
const { Schema } = mongoose;

const WordUserSchema = new Schema({
    word: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'Word' },
    user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User' },
    photo: {
        data: { type: mongoose.SchemaTypes.Buffer },
        contentType: { type: mongoose.SchemaTypes.String }
    },   
});

const WordUser = new mongoose.model('WordUser', WordUserSchema);

export default WordUser;