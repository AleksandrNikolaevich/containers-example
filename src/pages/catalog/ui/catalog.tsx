import React from 'react';
import { FlatList } from 'react-native';

import { ProductItem } from '@entities/product';
import { ScreenData } from '../types';

type Props = {
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
  data: ScreenData | null;
  onRefresh: () => void;
  onPressItem: (id: string) => void;
  onChangeFilter: (filter: string) => void;
};

/**
 * Тут только абстрактный UI. Не должно быть связи с бизнесом.
 * Никаких коннекторов тут не должно быть
 */
export const Catalog = ({ data }: Props) => {
  return (
    <FlatList
      data={data?.products}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => {
        return (
          <ProductItem {...item} />
        )
      }}
    />
  )
};
