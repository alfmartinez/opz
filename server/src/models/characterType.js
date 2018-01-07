import mongoose from 'mongoose';
import {Stats} from "./stats";

var characterTypeSchema = new mongoose.Schema({
    name: String,
    key: String,
    growth: Stats,
    npc: Boolean
});

export default mongoose.model('CharacterType', characterTypeSchema);