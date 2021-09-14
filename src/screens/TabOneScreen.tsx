import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Spacing } from '../infrastructure/Layout';

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.sm,
  },
});
