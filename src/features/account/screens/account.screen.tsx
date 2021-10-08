import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AccountStackParamList } from '../../../infrastructure/navigation/types';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.styles';

type AccountNavigationProps = StackScreenProps<AccountStackParamList, 'Main'>;
type AccountScreenProps = AccountNavigationProps;

export const AccountScreen = ({ navigation }: AccountScreenProps) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer position='bottom' size='large'>
          <AuthButton icon='lock' onPress={() => navigation.navigate('Login')}>
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon='account-plus'
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
