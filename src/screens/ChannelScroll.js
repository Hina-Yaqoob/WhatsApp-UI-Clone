import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// const channels = [
//   {
//     id: 1,
//     name: "Shehzad Roy",
//     //  photos: require("./../images/flower10.jpg"),
//     photos:
//       "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
//   },
//   {
//     id: 2,
//     name: "ARY News",

//     photos:
//       "https://cdn.pixabay.com/photo/2015/09/09/06/24/sisters-931131_1280.jpg",
//   },
//   {
//     id: 3,
//     name: "Billie Eilish Home",

//     photos:
//       "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg",
//   },
//   {
//     id: 4,
//     name: "New York Post",

//     photos:
//       "https://cdn.pixabay.com/photo/2022/02/16/04/15/cricketer-7015983_1280.jpg",
//   },
//   {
//     id: 5,
//     name: "Pakistan Cricket",
//     photos:
//       "https://cdn.pixabay.com/photo/2024/04/18/07/22/ai-generated-8703679_1280.jpg",
//   },
//   {
//     id: 6,
//     name: "Geo News ",
//     photos:
//       "https://cdn.pixabay.com/photo/2015/12/30/06/12/boy-1113806_1280.jpg",
//   },
//   {
//     id: 7,
//     name: "Akshay Kumar",
//     photos:
//       "https://cdn.pixabay.com/photo/2024/05/14/05/38/child-8760343_1280.jpg",
//   },
//   {
//     id: 8,
//     name: "UEFA EURO 2024",
//     photos:
//       "https://cdn.pixabay.com/photo/2021/08/20/03/57/boy-6559419_1280.jpg",
//   },
//   {
//     id: 9,
//     name: "Whatsapp",
//     photos:
//       "https://cdn.pixabay.com/photo/2022/08/25/21/18/doll-7411322_1280.jpg",
//   },
//   {
//     id: 9,
//     name: "Whatsapp",
//     photos:
//       "https://cdn.pixabay.com/photo/2022/08/25/21/18/doll-7411322_1280.jpg",
//   },
//   {
//     id: 10,
//     name: "Everyday Pakistan",
//     photos:
//       "https://cdn.pixabay.com/photo/2022/08/25/21/18/doll-7411322_1280.jpg",
//   },
// ];

const ChannelScroll = () => {
  return (
    <View>
      <View style={styles.myheaderContainer1}>
        <Text style={styles.myheaderText}> Find channels</Text>
        <View style={styles.myiconContainer}>
          <Text style={{ color: "green", marginRight: 9 }}>See all</Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={16}
            color="green"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default ChannelScroll;

const styles = StyleSheet.create({
  myheaderContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 27,
    marginTop: 2,
    marginBottom: 90,
  },
  myheaderText: {
    fontSize: 16,
    color: "black",
    // fontWeight: "300",
  },
  myiconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
