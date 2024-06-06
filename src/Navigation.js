import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

import Chat from "./screens/Chat";
import Calls from "./screens/Calls";
import Status from "./screens/Status";
import Community from "./screens/Community";
import CommunityDetails from "./screens/CommunityDetails";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  //  const color = isFocused ? "green" : "gray";
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarInactiveTintColor: "#90EE90",
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#90EE90",
        },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chats",
          backgroundColor: "#90EE90",
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="android-messages"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Updates"
        component={Status}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <Icon name="circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={24}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />

      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: "Calls",
          backgroundColor: "green",
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  tabBarLabel: {
    display: "none",
  },
});
