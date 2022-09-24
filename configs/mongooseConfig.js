import mongoose from 'mongoose';

export  const  connectDB = () => {
    try {
        const mongodbUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.iz1vu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;
        mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        
        db.once('open', () => {
            console.log('connected mongodb');
        })
    
        db.on('error', () => {
            console.log('MongoDB connection error ')
        })
    }
    catch (err) {
        console.log(err);
    }
   
}

