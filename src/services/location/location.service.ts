import camelize from 'camelize';
import { Location, LocationResponse } from '../../types/location';
import { locations } from './location.mock';

export const locationRequest = (
  searchTerm: string
): Promise<LocationResponse> => {
  return new Promise((resolve, reject) => {
    const location: LocationResponse = locations[searchTerm];
    if (!location) {
      reject('not found');
    }
    resolve(location);
  });
};

export const locationTransform = (result: LocationResponse): Location => {
  const formattedResult: LocationResponse = camelize(result);
  const { geometry } = formattedResult.results[0];
  return {
    geometry,
  };
};
