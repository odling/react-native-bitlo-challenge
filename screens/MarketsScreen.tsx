import React from "react";
import MarketList from "../components/MarketList";
import ScreenView from "../components/ScreenView";
import { layout } from "../constants/Layout";

export default function MarketsScreen() {
  return (
    <ScreenView style={{ paddingTop: layout.spacing.s }}>
      <MarketList />
    </ScreenView>
  );
}
