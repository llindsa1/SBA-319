import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Import Routes
const userRoutes = require ('./routes/userRoutes.mjs');
const postRoutes = require ('./routes/postRoutes.mjs');
const commentRoutes = require ('./routes/commentRoutes.mjs');

dotenv.config();
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
.catch(error => console.error(error));