import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import open from '../../assets/svgs/open';
import star from '../../assets/svgs/star';
import { Spacer, SpacerTypes } from '../../components/spacer/spacer.component';
import { Restaurant } from '../../models/restaurant';

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardImage source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <MetaDataSection>
          {ratingArray.map((_, index) => (
            <SvgXml key={index} xml={star} width={30} height={30} />
          ))}
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer variant={SpacerTypes.LEFT_MD} />
            {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            <Spacer variant={SpacerTypes.LEFT_MD} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </MetaDataSection>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardImage = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const MetaDataSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
