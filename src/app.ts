import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRouter } from './app/modules/car/car.route';

const app: Application = express();

//parser
app.use(cors());
app.use(express.json());

//application router
app.use('/api/cars', carRouter);

// root api
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from server!!!!!');
});

export default app;
