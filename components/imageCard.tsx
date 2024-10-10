import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Wallpaper } from "./../hooks/useWallpaper";
import { ThemedText } from "./ThemedText";
import Icon from "react-native-vector-icons/Ionicons";

export function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: wallpaper.url }}
            style={styles.image}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <ThemedText>{wallpaper.name}</ThemedText>
          <TouchableOpacity
            onPress={() => {
              setClicked(!clicked);
              console.log(
                `${wallpaper.name} ${clicked ? "Unliked" : "Liked"}!`
              );
            }}
          >
            <Icon
              name={clicked ? "heart" : "heart-outline"} // Toggle between filled and outline heart
              size={20}
              color={clicked ? "#FF0000" : "#000000"} // Change color based on clicked state
            />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
