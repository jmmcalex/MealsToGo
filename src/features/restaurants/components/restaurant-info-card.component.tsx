import React from 'react';
import { useContext } from 'react';
import { SvgXml } from 'react-native-svg';
import open from '../../../assets/svgs/open';
import star from '../../../assets/svgs/star';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';
import { Restaurant } from '../../../types/restaurant';
import {
  Icon,
  Info,
  MetaDataSection,
  RestaurantCard,
  RestaurantCardImage,
  SectionEnd,
} from './restaurant-info-card.styles';

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    images = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={3}>
      <RestaurantCardImage source={{ uri: images[0] }} />
      <Info>
        <Text variant='title'>{name}</Text>
        <MetaDataSection>
          {ratingArray.map((_, index) => (
            <SvgXml key={index} xml={star} width={30} height={30} />
          ))}
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='error'>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position='left' size='medium' />
            {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            <Spacer position='left' size='medium' />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </MetaDataSection>
        <Text variant='caption'>{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
