import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { QuoteProvider } from "./Context/QuoteContext";
import StackNavigation1 from "./Navigations/StackNavigation1";

export default function App() {
  return (
    <QuoteProvider>
      <NavigationContainer>
        <StackNavigation1 />
      </NavigationContainer>
    </QuoteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
