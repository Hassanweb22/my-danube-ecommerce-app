
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyStatusBar from './src/components/StatusBar/StatusBar';
import colors from './src/colors/colors';
import Home from './src/Screens/Home/Home';
import BottomTabs from './src/Navigators/BottomTab/Bottomtab'
import { NativeBaseProvider, Text, Box } from 'native-base';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider >
        <NavigationContainer>

          <BottomTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center"
  }
})