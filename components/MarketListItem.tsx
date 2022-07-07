import React from "react";
import { useTheme } from "../hooks/useTheme";
import navigationService from "../services/NavigationService";
import HighlightBox from "./styled/HighlightBox";
import Text from "./styled/Text";

interface MarketListItemProps {
  marketCode: string;
  currentQuote: string;
  change24h: string;
}

export const ITEM_HEIGHT = 50;

export default function MarketListItem({
  marketCode,
  currentQuote,
  change24h,
}: MarketListItemProps) {
  const theme = useTheme();
  const handlePress = () => {
    navigationService.navigate("MarketDetails", { marketCode });
  };
  return (
    <HighlightBox
      paddingHorizontal="m"
      paddingVertical="m"
      paddingRight="l"
      style={{
        borderTopWidth: 0.5,
        borderColor: theme.secondary,
        flexDirection: "row",
        justifyContent: "space-between",
        height: ITEM_HEIGHT,
      }}
      underlayColor={theme.secondary}
      onPress={handlePress}
    >
      <>
        <Text variant="body" color="primary">
          {marketCode}
        </Text>
        <Text
          variant="body"
          color={parseFloat(change24h) > 0 ? "positive" : "negative"}
          style={{ fontWeight: "bold" }}
        >
          {currentQuote}
        </Text>
      </>
    </HighlightBox>
  );
}
