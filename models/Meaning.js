import mongoose from 'mongoose';
const { Schema } = mongoose;

const MeaningSchema = new Schema({
    partOfSpeech: { type: mongoose.SchemaTypes.String, required: true},
    definition: { type: mongoose.SchemaTypes.String, required: true },
    examples: [{ type: mongoose.SchemaTypes.String }],
    synonyms: [{ type: mongoose.SchemaTypes.String }],
    antonyms : [{ type: mongoose.SchemaTypes.String }],
});

const Meaning = new mongoose.model('Meaning', MeaningSchema);

export default Meaning;