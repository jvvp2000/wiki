import React from 'react'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { FlatList } from 'react-native'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
  },
  {
    id: 1,
    image_url:
      'https://rihappy.vtexassets.com/arquivos/ids/487004/F1115_DIO_SW_The-Child_Cuddle_Meme_LookingUp_2.jpg?v=637196373202900000',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}
