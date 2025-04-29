import React, { useMemo } from 'react'
import { Catalog } from './ui';
import { useGetProducts } from '@entities/product';
import { mapDataToUI } from './libs';

type CatalogConnectorProps = {
  onOpenProduct: (id: string) => void
}

export const CatalogConnector = ({ onOpenProduct }: CatalogConnectorProps) => {

  const { isError, isLoading, isRefetching, data, refetch } = useGetProducts()

  const screenData = useMemo(() => data ? mapDataToUI(data) : null, [data])

  return (
    <Catalog 
      isError={isError}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      data={screenData}
      onRefresh={refetch}
      onPressItem={onOpenProduct}
    />
  );
};

