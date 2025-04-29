import React, { useMemo, useState } from 'react'
import { Catalog } from './ui';
import { useGetProducts } from '@entities/product';
import { mapDataToUI } from './libs';

type CatalogConnectorProps = {
  defaultFilter: string
  onOpenProduct: (id: string) => void
}

/**
 * Компонент является коннектором к бизнесу для UI 
 * Следуем правилу: Вложенный коннектор должен рендериться только в другом коннекторе
 */
export const CatalogConnector = ({ defaultFilter, onOpenProduct }: CatalogConnectorProps) => {
  const [filter, setFilter] = useState(defaultFilter)

  const { isError, isLoading, isRefetching, data, refetch } = useGetProducts(filter)

  const screenData = useMemo(() => data ? mapDataToUI(data) : null, [data])

  return (
    <Catalog 
      isError={isError}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      data={screenData}
      onRefresh={refetch}
      onPressItem={onOpenProduct}
      onChangeFilter={setFilter}
      // пример вложенного коннектора
      // header={
      //   <HeaderConnector />
      // }
    />
  );
};

