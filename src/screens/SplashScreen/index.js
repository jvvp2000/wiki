import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = () => {
  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>Star Wars - Wiki</Text>
      <StatusBar style="auto" />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
