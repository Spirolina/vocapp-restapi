import mongoose from 'mongoose';
const { Schema } = mongoose;

const WordSchema = new Schema({
    word: { type: mongoose.SchemaTypes.String, required: true },
    partOfSpeech: {type: mongoose.SchemaTypes.String, required: true},
    definition: { type: mongoose.SchemaTypes.String },
    examples: [
        {type: mongoose.SchemaTypes.String}
    ],
    imageUri: { type: mongoose.SchemaTypes.String} 
});

const Word = new mongoose.model('Word', WordSchema);

export default Word;