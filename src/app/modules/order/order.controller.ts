import { Request, Response } from 'express';
import { OrderValidationSchema } from './order.validation';
import { orderService } from './order.service';

const orderCar = async (req: Request, res: Response) => {
  try {
    const carInfo = req.body;

    const validateCarInfo = OrderValidationSchema.parse(carInfo);

    // if validate save to Db
    const result = await orderService.orderCarInDB(validateCarInfo);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    // get total revenue
    const { totalRevenue } = await orderService.calculateRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const orderController = {
  orderCar,
  calculateTotalRevenue,
};
