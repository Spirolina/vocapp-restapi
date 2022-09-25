import mongoose from 'mongoose';
const { Schema } = mongoose;

const WordSchema = new Schema({
    word: { type: mongoose.SchemaTypes.String, required: true },
    meaning: { type: mongoose.SchemaTypes.String },
    phonetics: {
        text: { type: mongoose.SchemaTypes.String },
        audio: { type: mongoose.SchemaTypes.String }
    }
});

const Word = new mongoose.model('Word', WordSchema);

export default Word;