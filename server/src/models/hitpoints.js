import {Schema} from 'mongoose';

export const Hitpoints = new Schema({
    current: Number,
    max: Number
});