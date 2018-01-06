import mongoose from 'mongoose';

var profileSchema = new mongoose.Schema({
    name: String,
    playerId: String
});

export default mongoose.model('Profile', profileSchema);