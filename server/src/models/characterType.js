import mongoose from 'mongoose';

var characterTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('CharacterType', characterTypeSchema);