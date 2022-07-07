import React, { useEffect, useState } from "react";
import OrderBook from "../components/OrderBook";
import ScreenView from "../components/ScreenView";
import Box from "../components/styled/Box";
import { layout } from "../constants/Layout";
import { RootStackScreenProps } from "../navigation";
import marketService, { IOrderBook } from "../services/MarketService";

export default function MarketDetailsScreen({route}: RootStackScreenProps<"MarketDetails">) {
  const fetchOrders = async () => {
    let result = await marketService.getOrderBook(route.params.marketCode);
    if (result) {
      setOrderBook(result);
    }
  }
  useEffect(() => {
    fetchOrders();
  }, [])

  const [orderBook, setOrderBook] = useState<IOrderBook>();
  const asks = orderBook?.asks;
  const bids = orderBook?.bids;

  return (
    <ScreenView style={{ paddingTop: layout.spacing.s }}>
      <Box paddingHorizontal="m" style={{flex: 0.5}}>
        <OrderBook type="ask" data={asks} marketCode={route.params.marketCode}/>
      </Box>
      <Box paddingHorizontal="m" style={{flex: 0.5}}>
        <OrderBook type="bid" data={bids} hideTitle marketCode={route.params.marketCode}/>
      </Box>
    </ScreenView>
  );
}
