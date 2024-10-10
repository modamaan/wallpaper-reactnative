import { FlatList, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "./BottomSheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { ImageCard } from "./imageCard";
import { useState } from "react";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );

  const combinedWallpapers = wallpapers.map((item, index) => ({
    ...item,
    column: index % 2, // 0 for left column, 1 for right column
    section: index < wallpapers.length / 2 ? 0 : 1, // 0 for first section, 1 for second
  }));

  const renderItem = ({ item }: { item: any }) => (
    <View
      style={[
        styles.imageContainer,
        { marginLeft: item.column === 1 ? 10 : 0 },
      ]}
    >
      <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />
    </View>
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={combinedWallpapers}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.contentContainer}
        />

        {selectedWallpaper && (
          <DownloadPicture
            wallpaper={selectedWallpaper}
            onClose={() => setSelectedWallpaper(null)}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },
});
