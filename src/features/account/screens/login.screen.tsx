import React, { useContext, useState } from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from '../components/account.styles';

export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    onLogin(email, password);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          keyboardType='email-address'
          label='Email'
          onChangeText={setEmail}
          textContentType='emailAddress'
          value={email}
        />
        <AuthInput
          label='Pasword'
          onChangeText={setPassword}
          secureTextEntry
          textContentType='password'
          value={password}
        />
        {error && (
          <Spacer position='top' size='medium'>
            <Text variant='error'>{error.message}</Text>
          </Spacer>
        )}
        <Spacer position='top' size='medium'>
          <AuthButton icon='lock' onPress={login}>
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
