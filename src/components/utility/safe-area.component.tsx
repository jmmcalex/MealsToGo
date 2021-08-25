import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeAreaView = styled(RNSafeAreaView)`
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
`;
