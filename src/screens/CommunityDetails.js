// src/screens/CommunityDetails.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CommunityDetails = ({ route }) => {
  const { community } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: community.image }} style={styles.image} />
      <Text style={styles.name}>{community.name}</Text>
      <Text style={styles.description}>{community.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});

export default CommunityDetails;
