import mongoose from 'mongoose';

var operationSchema = new mongoose.Schema({
    episode: {
        type: String,
        required: true
    }
});

export default mongoose.model('Operation', operationSchema);