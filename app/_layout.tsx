import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from '../components/context/ThemeContext';

export default function Layout() {
  return (
    <ThemeProvider>
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(nobottombar)/accountInfo"
          options={{
            headerShown: true,
            headerTitle: "Account Info",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
    </ThemeProvider>
  );
}
