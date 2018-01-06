import mongoose from 'mongoose';

var characterTypeSchema = new mongoose.Schema({
    name: String,
    key: String
});

export default mongoose.model('CharacterType', characterTypeSchema);