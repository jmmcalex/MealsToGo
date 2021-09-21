import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';
import { SearchContainer } from './search.styles';

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSubmitEditing = () => {
    search(searchQuery);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        onChangeText={onChangeSearch}
        icon='map'
        onSubmitEditing={onSubmitEditing}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
