import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '../../components/context/ThemeContext';

type Theme = 'dark' | 'light' | 'system';

export default function AccountInfo() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [theme, setTheme] = useState<Theme>('system');
  const { theme, setTheme } = useTheme();
  const navigation = useNavigation();

  const handleSignIn = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    console.log("Sign out");
    setIsSignedIn(false);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    console.log(`Theme changed to ${newTheme}`);
    // Here you would typically apply the theme change to your app
  };

  const getContainerStyle = () => {
    switch (theme) {
      case 'dark':
        return [styles.container, { backgroundColor: '#333', color: 'white' }];
      case 'light':
        return [styles.container, { backgroundColor: 'white', color: 'black' }];
      default:
        return styles.container;
    }
  };

  const getTextStyle = () => {
    return theme === 'dark' ? { color: 'white' } : { color: 'black' };
  };

  return (
    <View style={getContainerStyle()}>
     <Text style={[styles.title, getTextStyle()]}>Account Information</Text>
      {isSignedIn ? (
        <>
          <Text style={[styles.welcomeText, theme === 'dark' && { color: 'white' }]}>Welcome, User!</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn("Google")}
          >
            <AntDesign name="google" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn("Apple")}
          >
            <AntDesign name="apple1" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </>
      )}
      <View style={styles.themeContainer}>
        <TouchableOpacity
          style={[styles.themeButton, theme === 'dark' && styles.activeTheme]}
          onPress={() => setTheme('dark')}
        >
          <Text style={styles.themeButtonText}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.themeButton, theme === 'light' && styles.activeTheme]}
          onPress={() => setTheme('light')}
        >
          <Text style={styles.themeButtonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.themeButton, theme === 'system' && styles.activeTheme]}
          onPress={() => setTheme('system')}
        >
          <Text style={styles.themeButtonText}>System</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  themeButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  themeButtonText: {
    color: 'black',
    fontSize: 14,
  },
  activeTheme: {
    backgroundColor: '#2e6ddf',
  },
});