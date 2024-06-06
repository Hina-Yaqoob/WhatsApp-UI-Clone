import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CHANNELS from "../data/channelsdata";
import { Feather } from "react-native-vector-icons";

import { MaterialCommunityIcons } from "react-native-vector-icons";

const ChannelsBar = () => {
  const [channelData, setChannelsdata] = useState(CHANNELS);

  useEffect(() => {
    setChannelsdata(CHANNELS);
  });
  return (
    <>
      <ScrollView>
        <View style={styles.headerContainer1}>
          <Text style={styles.headerText}>Channels</Text>
          <View style={styles.iconContainer}>
            <Feather name="plus" size={21} color="black" style={styles.icon} />
          </View>
        </View>

        <View style={styles.container2}>
          <FlatList
            data={channelData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.channelContaineer}>
                <Image source={item.photos} style={styles.image} />
                <View style={styles.channelContent}>
                  <View style={styles.channelHeader}>
                    <Text style={styles.channelName}>{item.name}</Text>
                    <Text style={styles.channelTime}>{item.time}</Text>
                  </View>
                  <View style={styles.messages}>
                    <Text style={styles.channelMessage} numberOfLines={1}>
                      {item.lastMessege}
                    </Text>
                    {item.totalUnread > 0 && (
                      <View style={styles.unreadContainer}>
                        <Text style={styles.totalUnread}>
                          {item.totalUnread}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.channelpencil}
            onPress={() => {
              "+";
            }}
          >
            <MaterialCommunityIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.channelBtn}
            onPress={() => {
              "+";
            }}
          >
            <MaterialCommunityIcons name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.myheaderContainer1}>
          <Text style={styles.myheaderText}> Find channels </Text>
          <View style={styles.myiconContainer}>
            <Feather name="plus" size={21} color="black" style={styles.icon} />
          </View>
        </View> */}
      </ScrollView>
    </>
  );
};

export default ChannelsBar;

const styles = StyleSheet.create({
  ccontainer2: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  channelContaineer: {
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#128C7E",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  channelContent: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom: 13,
  },
  channelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 4,
  },

  channelName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  channelTime: {
    fontSize: 12,
    color: "#A0A09E",
  },
  messages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  channelMessage: {
    fontSize: 14,
    color: "#A0A09E",
    width: "90%",
  },
  unreadContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  totalUnread: {
    fontSize: 10,
    color: "#fff",
    // fontWeight: 600,
  },
  channelBtn: {
    position: "absolute",
    bottom: 154,
    right: 20,
    backgroundColor: "#3cb371",
    width: 55,
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  channelpencil: {
    position: "absolute",
    bottom: 230,
    right: 28,
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    shadowColor: "black",
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
  headerContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
    marginTop: 30,
  },
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
