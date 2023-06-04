import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import useRoutes from './app/modules/book/book.router'

const app: Application = express();
//using cors
app.use(cors());
//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/v1/book', useRoutes);



export default app;
