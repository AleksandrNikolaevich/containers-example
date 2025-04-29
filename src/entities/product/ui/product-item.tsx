import React from 'react';
import { Product } from '../types';
import { Text } from 'react-native';

type ProductItemProps = Product;

export const ProductItem = ({ name }: ProductItemProps) => {
  return (
    <Text>{name}</Text>
  )
};
