import { FontAwesome } from "@expo/vector-icons";
import { Link, Slot, Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    // <SafeAreaView>
    //   <View style={{ height: "90%", backgroundColor:"transparent" }}>
    //     <Slot />
    //   </View>
    //   <View style={{ backgroundColor: "black" }}>
    //     <Link href={"/account"}>
    //       <Text style={{ color: "white" }}>Click to account page</Text>
    //     </Link>
    //     <Link href={"/foryou"}>
    //       <Text style={{ color: "white" }}>Click to foryou page</Text>
    //     </Link>
    //     <Link href={"/explore"}>
    //       <Text style={{ color: "white" }}>Click to explore page</Text>
    //     </Link>
    //   </View>
    //  </SafeAreaView>


    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown:false }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="account"
      options={{
        title: 'account',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}
    />
  </Tabs>
  );
};

export default Layout;
