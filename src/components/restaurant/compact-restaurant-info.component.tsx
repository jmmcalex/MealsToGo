import React from 'react';
import { Platform } from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components/native';
import { Restaurant } from '../../types/restaurant';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: ${({ theme }) => theme.space[2]};
  width: 120px;
  height: 120px;
`;

const CompactWebview = styled(WebView)`
  border-radius: ${({ theme }) => theme.space[2]};
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  max-width: 120px;
  align-items: center;
`;

interface CompactRestaurantInfoProps {
  restaurant: Restaurant;
}

const Image = (props) =>
  Platform.OS === 'android' ? (
    <CompactWebview {...props} />
  ) : (
    <CompactImage {...props} />
  );

export const CompactRestaurantInfo = ({
  restaurant,
}: CompactRestaurantInfoProps) => {
  return (
    <Item>
      <Image source={{ uri: restaurant.images[0] }} />
      <Text variant='label' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
