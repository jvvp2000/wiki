import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '../../components'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    type: 'Personagem',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
  },
  {
    id: 1,
    image_url:
      'https://rihappy.vtexassets.com/arquivos/ids/487004/F1115_DIO_SW_The-Child_Cuddle_Meme_LookingUp_2.jpg?v=637196373202900000',
  },
]
const FAKE_DATA_MOVIES = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).',
  },
  {
    id: 1,
    image_url:
      'https://rihappy.vtexassets.com/arquivos/ids/487004/F1115_DIO_SW_The-Child_Cuddle_Meme_LookingUp_2.jpg?v=637196373202900000',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer align="flex start" justify="flex start">
      <Hero
        item={{
          image_url:
            'https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg/240px-Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg',
          title: 'Episodio 1',
          subtitle: 'A ameaca fantasma',
          type: 'Filme',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
