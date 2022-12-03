import { StyleSheet } from "react-native";
import CalculatorMainScreen from "./screens/CalculatorMainScreen";
import DataContextProvider from "./context/DataContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";

export default function App() {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <CalculatorMainScreen />
      </DataContextProvider>
    </ThemeContextProvider>
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
