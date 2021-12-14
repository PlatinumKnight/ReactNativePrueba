import React from "react";
import { StyleSheet, View, Button } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.Back}>
      <View style={[{ width: "50%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => navigation.navigate("QuoteDay")}
          title="Frase del dia"
          color="#FF3D00"
        />
      </View>

      <View style={[{ width: "50%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => navigation.navigate("QuoteRandom")}
          title="Frase aleatoria"
          color="#FF3D00"
        />
      </View>

      <View style={[{ width: "50%", margin: 10, backgroundColor: "red" }]}>
        <Button
          onPress={() => navigation.navigate("QuoteArrays")}
          title="Un monton de frases"
          color="#FF3D00"
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Button: {
    fontSize: 20,
  },
});
