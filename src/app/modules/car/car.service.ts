import { TCar } from './car.interface';
import { carModel } from './car.model';

const saveCarInDB = async (carData: TCar) => {
  const result = await carModel.create(carData);

  return result;
};

export const carServices = {
  saveCarInDB,
};
