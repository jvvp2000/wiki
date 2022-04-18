import React from 'react'
import { GoBackContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../../styles/theme'

export const GoBack = () => {
  const navigation = useNavigation()
  return (
    <GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackContainer>
  )
}
