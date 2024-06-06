import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import DATA from "../data/chatdata";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Header from "../../src/Header";

const Chat = () => {
  const [chatData, setChatData] = useState(DATA);

  useEffect(() => {
    setChatData(DATA);
  });
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatContaineer}>
            <Image source={item.photos} style={styles.image} />
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
              <View style={styles.messages}>
                <Text style={styles.chatMessage} numberOfLines={1}>
                  {item.lastMessege}
                </Text>
                {item.totalUnread > 0 && (
                  <View style={styles.unreadContainer}>
                    <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.chatBtn}
        onPress={() => {
          "+";
        }}
      >
        <MaterialCommunityIcons
          name="comment-plus-outline"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  chatContaineer: {
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#128C7E",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  chatContent: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom: 13,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatTime: {
    fontSize: 12,
    color: "#A0A09E",
  },
  messages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatMessage: {
    fontSize: 14,
    color: "#A0A09E",
    width: "90%",
  },
  unreadContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,

    backgroundColor: "#008000",
    alignItems: "center",
    justifyContent: "center",
  },
  totalUnread: {
    fontSize: 10,
    color: "#fff",
  },
  chatBtn: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#3cb371",
    width: 55,
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
