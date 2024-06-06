import { View, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
// import Header from "../../src/Header";
import Navigation from "../../src/Navigation";

export default function HomeScreen() {
  return (
    <NavigationContainer independent="true">
      <View style={styles.container}>
        <StatusBar backgroundColor={"green"} barStyle={"light-content"} />
        {/* <Header /> */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <Navigation />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
