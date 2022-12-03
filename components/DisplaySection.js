import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, Text, Switch, View } from "react-native";
import { DataContext } from "../context/DataContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

function DisplaySection() {
  const { themeContext, setThemeContext } = useContext(ThemeContext);
  const { dataContext } = useContext(DataContext);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setThemeContext(!themeContext);
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.toggleSwitch}>
        <Switch
          trackColor={{ true: "#17181a", false: "#e9f0f4" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text
        style={
          themeContext
            ? [
                styles.textLight,
                styles.commonTextStyle,
                { fontSize: dataContext.length > 12 ? 30 : 50 },
              ]
            : [
                styles.text,
                styles.commonTextStyle,
                { fontSize: dataContext.length > 12 ? 30 : 50 },
              ]
        }
      >
        {dataContext}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  textLight: {
    color: "black",
  },
  commonTextStyle: {
    textAlign: "right",
    marginRight: 10,
  },
  toggleSwitch: {
    marginTop: 20,
  },
});

export default DisplaySection;
