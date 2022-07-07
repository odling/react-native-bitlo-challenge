import React, { useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { MaterialIndicator } from "react-native-indicators";
import { useTheme } from "../hooks/useTheme";
import marketService, { IMarket } from "../services/MarketService";
import { useAppSelector } from "../store/hooks";
import MarketListItem, { ITEM_HEIGHT } from "./MarketListItem";

export default function MarketList() {
  const markets = useAppSelector((state) => state.market.data);
  const theme = useTheme();
  useEffect(() => {
    marketService.getMarkets();
  }, []);
  const renderItem: ListRenderItem<IMarket> = ({ item, index }) => {
    return (
      <MarketListItem
        change24h={item.change24h}
        currentQuote={item.currentQuote}
        marketCode={item.marketCode}
        key={item.marketCode}
      />
    );
  };

  const getItemLayout = (
    data: IMarket[] | null | undefined,
    index: number
  ) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  return markets.length > 0 ? (
    <FlatList
      data={markets}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      windowSize={10}
      maxToRenderPerBatch={10}
    />
  ) : (
    <MaterialIndicator style={{ flex: 1 }} color={theme.primary} />
  );
}
