import { carModel } from '../car/car.model';
import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const orderCarInDB = async (data: TOrder) => {
  const orderCarId = data.car;

  const carExist = await carModel.findOne({ _id: orderCarId });
  if (!carExist) {
    throw new Error('Car is not Found');
  }

  if (carExist.quantity < data.quantity) {
    throw new Error('Insufficient stock available');
  }

  const result = await orderModel.create(data);
  if (result) {
    // decrement quantity after order a car
    await carModel.updateOne(
      { _id: result.car },
      {
        $inc: {
          quantity: -result.quantity,
        },
        $set: {
          inStock: carExist.quantity - data.quantity === 0 ? false : true,
        },
      },
    );
  }
  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } },
      },
    },
  ]);
  return result[0];
};

export const orderService = {
  orderCarInDB,
  calculateRevenueFromDB,
};
