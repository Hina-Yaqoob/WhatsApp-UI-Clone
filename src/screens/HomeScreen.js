import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const user = {
    name: "John Doe",
    profilePicture: "https://example.com/johndoe.jpg",
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Start Call"
        onPress={() => navigation.navigate("Call", { user })}
      />
    </View>
  );
};

export default HomeScreen;
