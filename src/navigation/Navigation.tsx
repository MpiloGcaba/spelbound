import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/src/screens/HomeScreen";
import ElixirsScreen from "../elixirs/screen/ElixirsScreen"
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

// Define Bottom Navigation Routes
const HomeRoute = ({ navigation }: any) => <HomeScreen navigation={navigation} />;
const ElixirsRoute = ({navigation}: any) => <ElixirsScreen navigation={navigation} />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home", unfocusedIcon: "home-outline" },
    { key: "elixirs", title: "Elixirs", focusedIcon: "bottle-wine", unfocusedIcon: "bottle-wine-outline" },
  ]);

  // Define the renderScene for BottomNavigation
  const renderScene = ({ route, jumpTo }: any) => {
    switch (route.key) {
      case "home":
        return <HomeRoute navigation={{ jumpTo }} />;
      case "elixirs":
        return <ElixirsRoute navigation={{jumpTo}} />;
      default:
        return null;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main Screen with BottomNavigation */}
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <View style={{ flex: 1 }}>
              <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
              />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
