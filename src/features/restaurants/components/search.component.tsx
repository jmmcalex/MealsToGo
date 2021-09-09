import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSubmitEditing = () => {
    search(searchQuery);
  };

  return (
    <Searchbar
      placeholder='Search for a location'
      onChangeText={onChangeSearch}
      onSubmitEditing={onSubmitEditing}
      value={searchQuery}
    />
  );
};
