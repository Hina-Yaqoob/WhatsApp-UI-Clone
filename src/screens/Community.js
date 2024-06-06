import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CommunitiesHeader from "../CommunitiesHeader";

const communityData = [
  {
    id: 1,
    name: "Technologies Enthusiasts",
    description:
      "A community for tech lovers to share and discuss the latest in technology.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20231213112904/WhatsApp-Channels--How-To-Follow-Unfollow-and-Create-Them.png",
  },
  {
    id: 2,
    name: "React Native Developers",
    description:
      "Let's discuss your native development ideas to enhance your skills further ahead ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfiepxxd1smlWDfGoEmtpojx_XdyUUFgmkuQ&s",
  },
  {
    id: 3,
    name: "Opportunities PK",
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ouQuFtfjKvGdI7GQ6b7i0ZPSG7dkPJYVHA&s",
  },
  {
    id: 4,
    name: "Business Ideas",
    description: "We talk about business ideas and many more.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8iUZhJDe03BJJ4eIALF66tYt0hr7tWyxKw&s",
  },
  {
    id: 5,
    name: "Internships Only",
    description: "Join us to discuss about internships opportunities",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0stOoK0IQWa_UAxNidVwSLUNUtkPRmg5CIQ&s",
  },
  {
    id: 6,
    name: "Web Development Community",
    description: " Share your web development ideas with fellows developer ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXU4Ct7K00OsJhb702Y6ceN6iTjwhYQlFtA&s",
  },
];

const CommunityItem = ({ name, description, image, onPress }) => (
  <TouchableOpacity style={styles.communityItem} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
   
  </TouchableOpacity>
);

const Community = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate("CommunityDetails", { community: item });
  };

  return (
    <>
      <CommunitiesHeader />
      <FlatList
        data={communityData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommunityItem
            name={item.name}
            description={item.description}
            image={item.image}
            onPress={() => handlePress(item)}
          />
        )}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  communityItem: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default Community;
