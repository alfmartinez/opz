import mongoose from 'mongoose';
import CharacterType from './characterType';

var characterSchema = new mongoose.Schema({
    type: {
        type: CharacterType,
        required: true
    }
});

export default mongoose.model('Character', characterSchema);