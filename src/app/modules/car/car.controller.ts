import { Request, Response } from 'express';
import { carServices } from './car.service';
import { carValidationSchema } from './car.validation';

const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    console.log(carData);

    const validateCarData = carValidationSchema.parse(carData);

    // if validate save to Db
    const result = await carServices.saveCarInDB(validateCarData);

    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const getAllCar = async (req: Request, res: Response) => {
  try {
    const result = await carServices.getAllCarFromDB();

    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const getASingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await carServices.getASingleCarFromDB(carId);

    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const updateASingleCar = async (req: Request, res: Response) => {
  try {
    const { price, quantity } = req.body;
    console.log(req.body);
    const { carId } = req.params;

    const { updatedCarInfo } = await carServices.updateACarDataInDB(
      carId,
      price,
      quantity,
    );

    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: updatedCarInfo,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const deleteASingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const { deletedCarInfo } = await carServices.deleteACarFromDB(carId);

    res.status(200).json({
      message: 'Car deleted successfully',
      status: true,
      data: deletedCarInfo === null && {},
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error', error);
    res.status(500).json({
      message: error.message || 'something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const carController = {
  createCar,
  getAllCar,
  getASingleCar,
  updateASingleCar,
  deleteASingleCar,
};
