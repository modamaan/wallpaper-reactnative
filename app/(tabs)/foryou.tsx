// import React from "react";
import { StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { useWallpaper } from "@/hooks/useWallpaper";
// import { SplitView } from "@/components/SplitView";

// const Tab = createMaterialTopTabNavigator();

// export default function foryou() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Tab.Navigator>
//         <Tab.Screen name="Library" component={HomeScreen} />
//         <Tab.Screen name="Liked" component={SettingsScreen} />
//         <Tab.Screen name="Suggested" component={SettingsScreen} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// }

// function HomeScreen() {
//   const wallpapers = useWallpaper();

//   return (
//     <View style={{ flex: 1 }}>
//       <SplitView wallpapers={wallpapers} />
//     </View>
//   );
// }

// function SettingsScreen() {
//   const wallpapers = useWallpaper();

//   return (
//     <View style={{ flex: 1 }}>
//       <SplitView wallpapers={wallpapers} />
//     </View>
//   );
// }

import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import {useTheme}  from "../../components/context/ThemeContext";


const Tab = createMaterialTopTabNavigator();




export default function ForYou() {
  const { theme } = useTheme();

  const getContainerStyle = () => {
    return theme === 'dark' ? styles.darkContainer : styles.lightContainer;
  };
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function filterWallpapersByCategory(wallpapers: Wallpaper[], category: string) {
  return wallpapers.filter((wallpaper) => wallpaper.category === category);
}

function LibraryScreen() {
  const wallpapers = useWallpaper();
  const { theme } = useTheme();

  const getContainerStyle = () => {
    return theme === 'dark' ? styles.darkContainer : styles.lightContainer;
  };

  return (
    <View style={[{ flex: 1 },getContainerStyle()]}>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}

function LikedScreen() {
  const wallpapers = useWallpaper();
  const likedWallpapers = filterWallpapersByCategory(wallpapers, "liked");

  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpapers={likedWallpapers} />
    </View>
  );
}

function SuggestedScreen() {
  const wallpapers = useWallpaper();
  const suggestedWallpapers = filterWallpapersByCategory(wallpapers, "tree"); // Example of filtering "tree" category, you can adjust this

  return (
    <View style={{ flex: 1 }}>
      <SplitView wallpapers={suggestedWallpapers} />
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: 'white',
  },
});
