import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../Screens/Main";
import QuoteDay from "../Screens/QuoteDay";
import QuoteRandom from "../Screens/QuoteRandom";
import QuoteArrays from "../Screens/QuoteArrays";

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          headerTitle: "Quotes&Autors",
          headerTitleStyle: { alignSelf: "center" },
        }}
      />

      <Stack.Screen
        name="QuoteDay"
        component={QuoteDay}
        options={{ headerShown: true, headerTitle: "Frase del dia" }}
      />
      <Stack.Screen
        name="QuoteRandom"
        component={QuoteRandom}
        options={{ headerShown: true, headerTitle: "Frases aleatorias" }}
      />
      <Stack.Screen
        name="QuoteArrays"
        component={QuoteArrays}
        options={{ headerShown: true, headerTitle: "Un monton de frases" }}
      />
    </Stack.Navigator>
  );
}
