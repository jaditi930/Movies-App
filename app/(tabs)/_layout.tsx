import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs 
    screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#007AFF", 
        tabBarInactiveTintColor: "#8e8e93",
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === "index") {
              iconName = focused ? "home" : "home-outline"; 
            } else if (route.name === "saved") {
              iconName = focused ? "bookmark" : "bookmark-outline"; 
            }
  
            return <Ionicons name={iconName??"home"} size={size} color={color} />;
          },
  })}
      >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
      
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
