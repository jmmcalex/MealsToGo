import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SafeAreaView } from '../../../components/utility/safe-area.component';
import { SettingsParamList } from '../../../infrastructure/navigation/types';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

type SettingsScreenProps = StackScreenProps<SettingsParamList, 'Settings'>;

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

const SettingsList = styled(List.Section)`
  width: 300px;
  align-self: flex-start;
`;

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { user, onLogout } = useContext(AuthenticationContext);

  return (
    <SafeAreaView>
      {/* @ts-ignore */}
      <Avatar.Icon size={180} icon='human' backgroundColor='#6299f1' />
      <Spacer position='top' size='large'>
        <Text variant='label'>{user?.email}</Text>
      </Spacer>
      <SettingsList>
        <SettingsItem
          title='Favorites'
          description='View your favorites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsItem
          title='Logout'
          left={(props) => <List.Icon {...props} color='black' icon='door' />}
          onPress={onLogout}
        />
      </SettingsList>
    </SafeAreaView>
  );
};
