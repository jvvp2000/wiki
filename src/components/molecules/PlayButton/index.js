import React from 'react'
import { PlayButtonContainer } from './styles'
import { Text } from '../../atoms'
import { theme } from '../../../styles/theme'
import { Ionicons } from '@expo/vector-icons'

export const PlayButton = ({ onPress }) => (
  <PlayButtonContainer onPress={onPress}>
    <Ionicons
      name="play"
      size={theme.metrics.px(12)}
      color={theme.colors.black}
    />
    <Text fontFamily="bold" color="black" size={14}>
      Assistir
    </Text>
  </PlayButtonContainer>
)
