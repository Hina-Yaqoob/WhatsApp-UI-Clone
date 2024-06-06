import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";


const { width } = Dimensions.get("window");

const StatusBar = ({ stories }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story, index) => (
          <View key={index} style={styles.storyContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: story.photos }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.myStatusHeading}>{story.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  storyContainer: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  gradientBorder: {
    borderRadius: 50,
    padding: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 35,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  myStatusHeading: {
    fontSize: 14,
    // fontWeight: "bold",
  },
});

export default StatusBar;
