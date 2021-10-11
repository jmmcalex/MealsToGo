import camelize from 'camelize';
import { mockImages, mocks } from '.';
import {
  Location,
  MockRestaurant,
  Restaurant,
} from '../../../types/restaurant';

export const restaurantsRequest = (location: string): Promise<Location> => {
  return new Promise((resolve, reject) => {
    const mock: Location = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({
  results = [],
}: {
  results: MockRestaurant[];
}): Restaurant[] => {
  const mappedResults = results.map((restaurant) => {
    const images = restaurant.photos.map((_) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      images,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(mappedResults);
};
