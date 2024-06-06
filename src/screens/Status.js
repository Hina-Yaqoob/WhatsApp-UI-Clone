// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import React, { useEffect, useState } from "react";

// import FontAwesome5 from "react-native-vector-icons";

// import STATUSDATA from "../data/statusdata";

// const Status = () => {
//   const [statusData, setStatusData] = useState(STATUSDATA);
//   useEffect(() => {
//     setStatusData(STATUSDATA);
//   }, []);
//   const combinedStatusData = [
//     {
//       title: "Recent updates",

//       data: statusData.filter((item) => item.viewed === true),
//     },
//     {
//       title: "Viewed updates",
//       data: statusData.filter((item) => item.viewed === false),
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.myStatusContainer}>
//         <View>
//           <Image
//             source={require("./../images/flower7.jpg")}
//             style={styles.image}
//           />
//         </View>
//         <View>
//           <Text style={styles.myStatusHeading}> My Status</Text>
//           <Text style={styles.myStatusSubtext}>Tap to add status update</Text>
//         </View>
//       </View>
//       <FlatList
//         data={combinedStatusData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <>
//             <Text style={styles.viewedStatus}>{item.title}</Text>
//             <FlatList
//               data={item.data}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => {
//                 <View style={styles.viewedStatusContainer}>
//                   <View>
//                     <Image src={item.photos} style={styles.image} />
//                   </View>
//                   <View>
//                     <Text style={styles.myStatusHeading}>{item.name}</Text>
//                     <Text style={styles.myStatusSubtext}>{item.time}</Text>
//                   </View>
//                 </View>;
//               }}
//             />
//           </>
//         )}
//       />
//     </View>
//   );
// };

// export default Status;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   myStatusContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   myStatusHeading: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   myStatusSubtext: {
//     fontSize: 14,
//     color: "grey",
//   },
//   viewedStatus: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "grey",
//     marginTop: 5,
//     marginLeft: 16,
//     marginBottom: 5,
//   },
//   viewedStatusContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//   },
// });

import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  SectionList,
} from "react-native";
import React from "react";

// import users from "../data/statusdata";
import StatusHeader from "../StatusHeader";
import StatusBar from "./StatusBar";
import ChannelsBar from "./ChannelsBar";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import ChannelScroll from "./ChannelScroll";
import ChannelsCard from "./ChannelsCard";
import ChannelCardsContainer from "./ChannelCardsContainer";
const stories = [
  {
    id: 1,
    name: "Fatima",
    //  photos: require("./../images/flower10.jpg"),
    photos:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    time: "Today 9:17 AM",

    viewed: true,
  },
  {
    id: 2,
    name: "Hina",

    photos:
      "https://cdn.pixabay.com/photo/2015/09/09/06/24/sisters-931131_1280.jpg",

    viewed: true,
  },
  {
    id: 3,
    name: "Hashir",

    photos:
      "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg",

    viewed: true,
  },
  {
    id: 4,
    name: "Huzaifa",

    photos:
      "https://cdn.pixabay.com/photo/2022/02/16/04/15/cricketer-7015983_1280.jpg",

    viewed: false,
  },
  {
    id: 5,
    name: "Meerab",
    photos:
      "https://cdn.pixabay.com/photo/2024/04/18/07/22/ai-generated-8703679_1280.jpg",
    viewed: true,
  },
  {
    id: 6,
    name: "Mehtab ",
    photos:
      "https://cdn.pixabay.com/photo/2015/12/30/06/12/boy-1113806_1280.jpg",
    viewed: true,
  },
  {
    id: 7,
    name: "Ayesha",
    photos:
      "https://cdn.pixabay.com/photo/2024/05/14/05/38/child-8760343_1280.jpg",
    viewed: true,
  },
  {
    id: 8,
    name: "M Moeez",
    photos:
      "https://cdn.pixabay.com/photo/2021/08/20/03/57/boy-6559419_1280.jpg",
    viewed: true,
  },
  {
    id: 9,
    name: "Amarah",
    photos:
      "https://cdn.pixabay.com/photo/2022/08/25/21/18/doll-7411322_1280.jpg",
    viewed: true,
  },
];

const Status = () => {
  return (
    <View>
      <StatusHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer1}>
          <Text style={styles.headerText}>Status</Text>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={21}
              color="black"
              style={styles.icon}
            />
          </View>
        </View>
        <StatusBar stories={stories} />
        <View style={styles.line} />
        <View style={styles.main}>
          <ChannelsBar />
          <ChannelScroll />
          <ChannelCardsContainer />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
main:{
marginBottom:120
},


  userImage: {
    height: 50,
    width: 50,
  },
  line: {
    height: 1,
    backgroundColor: "dimgray",
    marginVertical: 6,
  },
  headerContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Status;
