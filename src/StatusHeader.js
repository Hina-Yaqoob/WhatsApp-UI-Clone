import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";

const StatusHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Updates</Text>
        <View style={styles.iconContainer}>
          <Feather name="camera" size={20} color="black" style={styles.icon} />
          <Feather name="search" size={15} color="black" style={styles.icon} />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={21}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>

      {/* <View style={styles.headerContainer1}>
        <Text style={styles.headerText}>Status</Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={21}
            color="black"
            style={styles.icon}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default StatusHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
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
  icon: {
    marginLeft: 20,
  },
  searchbar: {
    flexDirection: "column",
  },
  headerContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
    marginTop: 30,
  },
});
