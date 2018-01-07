import mongoose from 'mongoose';
import {Stats} from "./stats";

var characterTypeSchema = new mongoose.Schema({
    name: String,
    key: String,
    growth: Stats
});

export default mongoose.model('CharacterType', characterTypeSchema);