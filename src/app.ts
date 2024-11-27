import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRouter } from './app/modules/car/car.route';
import { orderRouter } from './app/modules/order/order.route';

const app: Application = express();

//parser
app.use(cors());
app.use(express.json());

//application router
app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);

// root api
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from server!!!!!');
});

export default app;
