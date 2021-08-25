import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardImage = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const MetaDataSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
