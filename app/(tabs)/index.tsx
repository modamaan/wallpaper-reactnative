import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "@/components/BottomSheet";
import { ImageCard } from "@/components/imageCard";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { useTheme } from '../../components/context/ThemeContext';

export default function MyTabs() {
  const wallpaper = useWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] = React.useState<null | Wallpaper>(null);
  const { theme } = useTheme();

  const combinedWallpapers = wallpaper.map((item, index) => ({
    ...item,
    column: index % 2,
    section: index < wallpaper.length / 2 ? 0 : 1,
  }));

  const renderItem = ({ item }:{item:any}) => (
    <View
      style={[
        styles.imageContainer,
        { marginLeft: item.column === 1 ? 10 : 0 },
      ]}
    >
      <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />
    </View>
  );

  const getContainerStyle = () => {
    return theme === 'dark' ? styles.darkContainer : styles.lightContainer;
  };

  return (
    <SafeAreaView style={[{ flex: 1 }, getContainerStyle()]}>
      <FlatList
        ListHeaderComponent={
          <Image
            style={{ height: 200, width: "100%" }}
            source={{ uri: wallpaper[0]?.url ?? "" }}
          />
        }
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
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: 'white',
  },
});