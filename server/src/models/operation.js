import mongoose from 'mongoose';

var operationSchema = new mongoose.Schema({
    episode: {
        type: String,
        required: true
    },
    log: [{
        message: String
    }]
});

export default mongoose.model('Operation', operationSchema);