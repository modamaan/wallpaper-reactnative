import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const explore = () => {
  return (
    <SafeAreaView>
     <Text>explore</Text>
      <Link href={"/accountInfo"}>
        <Text>account info</Text>
      </Link>
    </SafeAreaView>
  );
};

export default explore;
