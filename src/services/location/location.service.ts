import camelize from 'camelize';
import { Location } from '../../types/location';
import { locations } from './location.mock';

export const locationRequest = (searchTerm: string): Promise<Location> => {
  return new Promise((resolve, reject) => {
    const location: Location = locations[searchTerm];
    if (!location) {
      reject('not found');
    }
    resolve(location);
  });
};

export const locationTransform = (result: Location): {} => {
  const formattedResult: Location = camelize(result);
  const { geometry } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
