import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { QuoteContext } from "../Context/QuoteContext";

const QuoteArrays = () => {
  const { Quote, QuoteAll } = useContext(QuoteContext);
  return (
    <ScrollView>
      <View>
        {Quote.map((e, i) => (
          <View key={i}>
            <Card>
              <Text>{e.q}</Text>
              <Text style={styles.phrase}>{e.a}</Text>
            </Card>

            <View
              style={[{ width: "50%", margin: 10, backgroundColor: "red" }]}
            ></View>
          </View>
        ))}
        {
          <>
            <Button
              title="Aleatorio"
              onPress={() => QuoteAll("quotes")}
              style={styles.Button}
            />
          </>
        }
      </View>
    </ScrollView>
  );
};

export default QuoteArrays;

const styles = StyleSheet.create({
  phrase: {
    textAlign: "right",
    fontWeight: "bold",
  },
  Button: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
