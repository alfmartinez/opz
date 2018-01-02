import mongoose from 'mongoose';

var episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
    opponents: [{
        
    }]
});

export default mongoose.model('Operation', operationSchema);