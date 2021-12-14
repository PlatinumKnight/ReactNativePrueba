import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import { QuoteContext } from "../Context/QuoteContext";

const QuoteRandom = () => {
  const { Random, QuoteRandom } = useContext(QuoteContext);
  return (
    <View style={styles.Container}>
      {Random.map((e, i) => (
        <View key={i}>
          <Card>
            <Text>{e.q}</Text>
            <Text style={styles.phrase}>{e.a}</Text>
          </Card>

          <Button
            title="Aleatorio"
            onPress={() => QuoteRandom("random")}
            style={styles.Button}
          />
        </View>
      ))}
    </View>
  );
};

export default QuoteRandom;

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
  Button: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
