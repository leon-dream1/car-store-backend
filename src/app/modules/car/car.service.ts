import { TCar } from './car.interface';
import { carModel } from './car.model';

// save a car data
const saveCarInDB = async (carData: TCar) => {
  const result = await carModel.create(carData);
  return result;
};

// Get all cars Data
const getAllCarFromDB = async () => {
  const result = await carModel.find({});
  return result;
};

// Get a single car data
const getASingleCarFromDB = async (id: string) => {
  const result = await carModel.findOne({ _id: id });
  return result;
};

// Update a car data
const updateACarDataInDB = async (
  id: string,
  price: number,
  quantity: number,
) => {
  // get the car info will be update
  // const carInfo = await carModel.findOne({ _id: id });

  const updatedResult = await carModel.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        price,
        quantity,
      },
    },
  );
  // get the updated car data
  const updatedCarInfo = await carModel.findOne({ _id: id });
  return { updatedResult, updatedCarInfo };
};

// Get a single car data
const deleteACarFromDB = async (id: string) => {
  const result = await carModel.deleteOne({ _id: id });

  // get the Deleted car Info
  const deletedCarInfo = await carModel.findOne({ _id: id });
  return { result, deletedCarInfo };
};

export const carServices = {
  saveCarInDB,
  getAllCarFromDB,
  getASingleCarFromDB,
  updateACarDataInDB,
  deleteACarFromDB,
};
