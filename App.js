import React from 'react'

import AppLoading from 'expo-app-loading'
import { Home } from './src/screens'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { theme } from './src/styles'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </ThemeProvider>
  )
}
