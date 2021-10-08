import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../assets/images/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.336);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  mode: 'contained',
  color: colors.brand.primary,
})`
  padding: ${({ theme }) => theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: 'outlined',
  autoCapitalize: 'none',
})`
  width: 300px;
`;
