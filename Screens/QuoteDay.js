import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { QuoteContext } from "../Context/QuoteContext";

const QuoteDay = ({ navigation }) => {
  const { Day } = useContext(QuoteContext);
  return (
    <View style={styles.Container}>
      {Day.map((e, i) => (
        <View key={i}>
          <Card>
            <Text>{e.q}</Text>
            <Text style={styles.phrase}>{e.a}</Text>
          </Card>
        </View>
      ))}
    </View>
  );
};

export default QuoteDay;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phrase: {
    textAlign: "right",
    fontWeight: "bold",
  },
});
