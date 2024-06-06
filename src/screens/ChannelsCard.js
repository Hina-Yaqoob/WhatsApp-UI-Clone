import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ChannelsCard = ({ image, title, description, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ChannelsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    marginTop: 1,
    margin: 6,
    width: 140,
    height: 145,
  },
  image: {
    width: "46%",
    height: 65,
    marginLeft: 40,
    marginTop: 10,
    borderRadius: 40,
    objectFit: "contain",
    borderColor: "dimgrey",
    borderWidth: 0.1,
  },
  //   content: {
  //     padding: 10,
  //   },
  //   title: {
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     marginBottom: 5,
  //   },
  description: {
    fontSize: 12,
    color: "black",
    marginBottom: 10,
    paddingLeft: 35,
    fontWeight: "bold",
    width: "100%",
  },
  button: {
    backgroundColor: "#90EE90",
    padding: 4,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 115,
    height: 25,
    marginLeft: 9,
    marginBottom: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
  },
});
