import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`
export const ButtonsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  justify-content: space-between;
  width: 100%;
`
