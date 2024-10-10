
import DownloadPicture from "@/components/BottomSheet";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const account = () => {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>account page</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default account;
