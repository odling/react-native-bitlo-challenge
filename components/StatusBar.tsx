import React from "react";
import { StatusBar as RNStatusBar } from "expo-status-bar";
import { useAppSelector } from "../store/hooks";


export default function StatusBar() {
    const isDarkMode = useAppSelector((state) => state.theme.name) === "dark";
    return <RNStatusBar style={isDarkMode ? "light" : "dark"} translucent/>
}