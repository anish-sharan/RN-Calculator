import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { DataContext } from "../context/DataContextProvider";

function ButtonSection() {
  const { dataContext, setDataContext } = useContext(DataContext);

  const [decimal, setDecimal] = useState(false);

  // function to check if the data input is operator or not
  const isOperator = (data) => {
    return data === "+" || data === "-" || data === "*" || data === "/";
  };

  function onlyZero(str) {
    return /^0+$/.test(str);
  }

  const buttonHandler = (data) => {
    // check if data input is not like  9.8.9
    if (isOperator(data)) {
      setDecimal(false);
    }
    if (decimal && data === ".") {
      return;
    }
    if (data === ".") {
      setDecimal(true);
      setDataContext((prev) => prev + data);
      return;
    }
    // condition to check if all the digits are 0 and new data input is coming (00000 -> non-zero data coming)
    if (onlyZero(dataContext) && data !== "0") {
      setDataContext(data);
      return;
    }
    // check if last two data input is operator or not (9**8)
    if (isOperator(dataContext[dataContext.length - 1]) && isOperator(data)) {
      return;
    }
    // check if there is more the one zero after the operator (9+00)
    if (
      isOperator(dataContext[dataContext.length - 2]) &&
      dataContext[dataContext.length - 1] === "0" &&
      data === "0"
    ) {
      return;
    }
    // check if non zero digit  is enter after the 0 after the operator ( 9 + 0_ (next data input is non zero) )
    if (
      isOperator(dataContext[dataContext.length - 2]) &&
      dataContext[dataContext.length - 1] === "0" &&
      data !== "0"
    ) {
      clearLastData();
      setDataContext((prev) => prev + data);
      return;
    }
    // check if there is two consecutive decimals (.) are there or not (8..)
    if (dataContext[dataContext.length - 1] === "." && data === ".") {
      return;
    }
    setDataContext((prev) => prev + data);
  };

  const deleteHandler = () => {
    setDecimal(false);
    setDataContext("");
  };

  const evaluateHandler = () => {
    let check = dataContext;
    if (isOperator(check[check.length - 1])) {
      return;
    }
    setDataContext(eval(dataContext));
  };

  const clearLastData = () => {
    let oldString = dataContext;
    oldString += ""; // to convert the oldString variable to the string
    let newString = oldString.slice(0, -1);
    // reset the decimal variable because it was deleted
    if (dataContext[dataContext.length - 1] === ".") {
      setDecimal(false);
    }
    setDataContext(newString);
  };

  return (
    <>
      <View style={styles.buttonSection}>
        <CustomButton
          title={"C"}
          onPress={deleteHandler}
          textStyle={{ color: "red" }}
        />
        <CustomButton title={"("} onPress={() => buttonHandler("(")} />
        <CustomButton title={")"} onPress={() => buttonHandler(")")} />
        <CustomButton isBackIcon={true} onPress={clearLastData} />
      </View>
      <View style={styles.buttonSection}>
        <CustomButton title={"7"} onPress={() => buttonHandler("7")} />
        <CustomButton title={"8"} onPress={() => buttonHandler("8")} />
        <CustomButton title={"9"} onPress={() => buttonHandler("9")} />
        <CustomButton
          title={"/"}
          buttonStyle={{ backgroundColor: "#ff9500" }}
          onPress={() => buttonHandler("/")}
        />
      </View>
      <View style={styles.buttonSection}>
        <CustomButton title={"4"} onPress={() => buttonHandler("4")} />
        <CustomButton title={"5"} onPress={() => buttonHandler("5")} />
        <CustomButton title={"6"} onPress={() => buttonHandler("6")} />
        <CustomButton
          title={"*"}
          buttonStyle={{ backgroundColor: "#ff9500" }}
          onPress={() => buttonHandler("*")}
        />
      </View>
      <View style={styles.buttonSection}>
        <CustomButton title={"1"} onPress={() => buttonHandler("1")} />
        <CustomButton title={"2"} onPress={() => buttonHandler("2")} />
        <CustomButton title={"3"} onPress={() => buttonHandler("3")} />
        <CustomButton
          title={"-"}
          buttonStyle={{ backgroundColor: "#ff9500" }}
          onPress={() => buttonHandler("-")}
        />
      </View>
      <View style={styles.buttonSection}>
        <CustomButton title={"0"} onPress={() => buttonHandler("0")} />
        <CustomButton title={"."} onPress={() => buttonHandler(".")} />
        <CustomButton
          title={"="}
          buttonStyle={{ backgroundColor: "#2ec973" }}
          onPress={evaluateHandler}
        />
        <CustomButton
          title={"+"}
          onPress={() => buttonHandler("+")}
          buttonStyle={{ backgroundColor: "#ff9500" }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: "row",
    margin: 10,
  },
});

export default ButtonSection;
