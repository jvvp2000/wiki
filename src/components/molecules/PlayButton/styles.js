import styled from 'styled-components/native'
import { theme } from '../../../styles'

export const PlayButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.metrics.px(100)}px;
  height: ${({ theme }) => theme.metrics.px(36)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
`
