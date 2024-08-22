import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/users.js'

dotenv.config();

const app = express();
const mongo_URL = process.env.MONGODB_URL;

mongoose.connect(mongo_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listen at http://localhost:${PORT}`);
});
