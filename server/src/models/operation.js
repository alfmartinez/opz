import mongoose from 'mongoose';

var operationSchema = new mongoose.Schema({
    episode: {
        type: String,
        required: true
    },
    log: [{
        message: String
    }],
    team: [{
        id: String,
        name: String,
        specialReady: Boolean,
        hitpoints: Number
    }],
    opponents: [{
        template: String,
        hitpoints: Number
    }]
});

export default mongoose.model('Operation', operationSchema);