import React, { useContext } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import DisplaySection from "../components/DisplaySection";
import ButtonSection from "../components/ButtonSection";
import { ThemeContext } from "../context/ThemeContextProvider";

function CalculatorMainScreen() {
  const { themeContext } = useContext(ThemeContext);

  return (
    <View style={themeContext ? styles.containerLight : styles.container}>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
      <DisplaySection />
      <ButtonSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e0e",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "#f6f8f9",
  },
});

export default CalculatorMainScreen;
