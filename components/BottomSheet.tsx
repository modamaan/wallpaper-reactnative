import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { ThemedText } from "./ThemedText";

const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper?: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snap points for the BottomSheet
  const snapPoints = useMemo(() => ["94%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      ref={bottomSheetRef}
      snapPoints={snapPoints} // Add snap points here
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          style={[styles.image, { flex: 1 }]}
          source={{
            uri: wallpaper?.url ?? "",
          }}
        />
        <View style={styles.textContainer}>
          <ThemedText style={styles.wallpaperName}>{wallpaper.name}</ThemedText>
        </View>
        {/* <Button title="Download"></Button> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 0.8,
    padding: 20,
    marginTop: 30,
    gap: 10,
  },
  textContainer: {
    backgroundColor: "#00000088", // Semi-transparent black background
    padding: 10, // Add padding inside the container
    borderRadius: 8, // Rounded corners for the container
    marginTop: 5, // Space above the text container
    alignItems: "center", // Center the text horizontally
    justifyContent: "center", // Center the text vertically
  },
  wallpaperName:{
    color: "white", // Text color
    fontSize: 18, // Text size
    fontWeight: "bold", // Bold text
    textAlign: "center", // Center align text
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Add a text shadow
    textShadowOffset: { width: -1, height: 1 }, // Shadow offset
    textShadowRadius: 10, // Shadow blur radius
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default DownloadPicture;
