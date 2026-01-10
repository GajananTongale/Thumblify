import express, { Request, Response } from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./configs/db.js";
import session from "express-session";
import MongoStore from 'connect-mongo'
import AuthRouter from "./Routes/AuthRoutes.js";
import ThumbnailRouter from "./Routes/ThumbnailRoutes.js";
import UserRouter from "./Routes/UserRoutes.js";
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true // This ensures all generated URLs use https
});
declare module 'express-session' {
    interface SessionData {
        isLoggedIn: boolean;
        userId: string;
    }
}

await connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:3000','https://thumblify-ten.vercel.app'],
    credentials: true,
}))

app.set('trust proxy', 1);

app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        path: '/'
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions'
    })
}));


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use('/api/auth', AuthRouter);
app.use('/api/thumbnail',ThumbnailRouter);
app.use('/api/user',UserRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});