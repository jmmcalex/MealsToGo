import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context';

type SearchProps = {
  onFavoritesToggle: () => void;
  isFavoritesToggled: boolean;
};

export const Search = ({
  isFavoritesToggled,
  onFavoritesToggle,
}: SearchProps) => {
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
    <Searchbar
      icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
      onIconPress={onFavoritesToggle}
      placeholder='Search for a location'
      onChangeText={onChangeSearch}
      onSubmitEditing={onSubmitEditing}
      value={searchQuery}
    />
  );
};
