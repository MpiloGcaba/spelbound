import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/src/screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

// Define Bottom Navigation Routes
const HomeRoute = ({ navigation }: any) => <HomeScreen navigation={navigation} />;
const ElixirsRoute = () => (
  <View style={styles.scene}>
    <Text>Elixirs</Text>
  </View>
);

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
        return <ElixirsRoute />;
      default:
        return null;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main Screen with BottomNavigation */}
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {(props) => (
            <View style={{ flex: 1 }}>
              <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
              />
            </View>
          )}
        </Stack.Screen>

        {/* Details Screen for navigation from Home */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Dummy Details Screen (replace with your actual component)
const DetailsScreen = ({ route }: any) => {
  const { houseId } = route.params;
  return (
    <View style={styles.scene}>
      <Text>Details Screen</Text>
      <Text>House ID: {houseId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyComponent;
