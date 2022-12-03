import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContextProvider";

function CustomButton({
  title,
  onPress,
  buttonStyle,
  isBackIcon = false,
  textStyle,
}) {
  const { themeContext } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        themeContext
          ? [styles.buttonLight, buttonStyle, styles.commonButton]
          : [styles.button, buttonStyle, styles.commonButton]
      }
      onPress={onPress}
    >
      {isBackIcon ? (
        <Text
          style={
            themeContext
              ? [styles.textLight, styles.commonTextStyle]
              : [styles.text, styles.commonTextStyle]
          }
        >
          ⌫
        </Text>
      ) : (
        <Text
          style={
            themeContext
              ? [styles.textLight, textStyle]
              : [styles.text, textStyle]
          }
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#17181a",
  },
  buttonLight: {
    backgroundColor: "#e9f0f4",
  },
  commonButton: {
    width: "20%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    margin: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  textLight: {
    fontSize: 16,
    color: "black",
  },
  commonTextStyle: {
    width: 30,
    fontSize: 20,
    marginLeft: 10,
  },
});
export default CustomButton;
