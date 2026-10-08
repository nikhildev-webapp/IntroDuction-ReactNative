import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
          screenOptions={{
              headerShown: false,
          }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Input" options={{ title: "Input" }} />
      <Tabs.Screen name="Buttons" options={{ title: "Buttons" }} />
      <Tabs.Screen name="Counter" options={{ title: "Counter" }} />
      <Tabs.Screen name="Lists" options={{ title: "Lists" }} />
      <Tabs.Screen name="ScrollViews" options={{ title: "Scroll" }} />
    </Tabs>
  );
}