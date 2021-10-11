import { StackScreenProps } from '@react-navigation/stack';
import AnimatedLottieView from 'lottie-react-native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { AccountStackParamList } from '../../../infrastructure/navigation/types';
import { colors } from '../../../infrastructure/theme/colors';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.styles';

type RegisterScreenProps = StackScreenProps<AccountStackParamList, 'Register'>;
export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const { onRegister, isLoading, error, clearError } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const register = () => {
    onRegister(email, password, repeatedPassword);
  };

  navigation.addListener('focus', clearError);

  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <AnimatedLottieView
          source={require('../../../assets/lottie/watermelon.json')}
          autoPlay
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
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
        <AuthInput
          label='Repeated Password'
          onChangeText={setRepeatedPassword}
          secureTextEntry
          textContentType='password'
          value={repeatedPassword}
        />
        {error && (
          <ErrorContainer>
            <Text variant='error'>{error.message}</Text>
          </ErrorContainer>
        )}
        <Spacer position='top' size='medium'>
          {isLoading ? (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          ) : (
            <AuthButton icon='account-plus' onPress={register}>
              Register
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer position='top' size='medium'>
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
