import React from "react";
import { ListRenderItem, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MaterialIndicator } from "react-native-indicators";
import { layout } from "../constants/Layout";
import { useTheme } from "../hooks/useTheme";
import { IOrder, IOrderBook } from "../services/MarketService";
import Box from "./styled/Box";
import Text from "./styled/Text";

interface OrderBookProps {
  type: "ask" | "bid";
  data?: IOrderBook["asks"];
  hideTitle?: boolean;
  marketCode: string;
}

const ITEM_HEIGHT = 30;

export default function OrderBook({
  type,
  data,
  hideTitle,
  marketCode,
}: OrderBookProps) {
  const theme = useTheme();
  const [exchangeCurrency, baseCurrency] = marketCode.split("-");
  const renderItem: ListRenderItem<IOrder> = ({ item }) => (
    <Box style={[styles.itemContainer, { borderColor: theme.secondary }]}>
      <Text
        variant="list"
        color={type == "ask" ? "positive" : "negative"}
        style={styles.itemText}
      >
        {item.price}
      </Text>
      <Text variant="list" color="primary" style={styles.itemText}>
        {item.amount}
      </Text>
      <Text variant="list" color="primary" style={styles.itemText}>
        {item.total}
      </Text>
    </Box>
  );
  const listHeader = () =>
    !hideTitle ? (
      <Box
        paddingVertical="s"
        style={[
          styles.itemContainer,
          { borderWidth: 0.5, borderColor: theme.secondary },
        ]}
      >
        <Text variant="list" color="primary" style={styles.titleText}>
          {"Fiyat"}
        </Text>
        <Text variant="list" color="primary" style={styles.titleText}>
          {"Miktar (" + exchangeCurrency + ")"}
        </Text>
        <Text variant="list" color="primary" style={styles.titleText}>
          {"Toplam (" + baseCurrency + ")"}
        </Text>
      </Box>
    ) : null;

  const getItemLayout = (data: IOrder[] | null | undefined, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  return (
    <>
      {listHeader()}
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={{
            borderWidth: 0.5,
            borderColor: theme.secondary,
            marginBottom: layout.spacing.s,
          }}
          getItemLayout={getItemLayout}
          windowSize={10}
          maxToRenderPerBatch={10}
        />
      ) : (
        <MaterialIndicator style={{ flex: 1 }} color={theme.primary} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    height: ITEM_HEIGHT,
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    flex: 0.3,
    textAlign: "center",
  },
  itemText: {
    flex: 0.3,
    textAlign: "right",
  },
});
