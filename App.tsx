import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { SplashScreenComponent } from "./app/screens";
import { COLORS } from "./app/constants";
import StackNavigator from "./app/navigation/StackNavigator";
import { store } from "./app/store/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "montserrat-light": require("./app/assets/fonts/Montserrat-Light.ttf"),
    "montserrat-regular": require("./app/assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./app/assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-bold": require("./app/assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise((resolve) => setTimeout(resolve, 700));

        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn(error);
      }
    }

    prepareApp();
  }, []);

  if (!fontsLoaded) {
    return <SplashScreenComponent />;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
