import styled from 'styled-components/native'
import { theme } from '../../../styles'

export const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(64)}px;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
`
