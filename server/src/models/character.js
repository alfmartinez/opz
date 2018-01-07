import mongoose from 'mongoose';

var characterSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.ObjectId,
        ref: 'CharacterType'
    },
    playerId: String,
    xp: Number
});

export default mongoose.model('Character', characterSchema);