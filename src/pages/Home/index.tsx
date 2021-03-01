import React from 'react'
import * as S from './styled'
import Logo from 'components/Logo'
import Plate from 'components/Plate'
import Search from 'components/Search'
import Footer from 'components/Footer'
import CardCar from 'components/CardCar'

const Home = () => {
  return (
    <>
      <S.Header>
        <Logo />
        <Plate />
        <Search />
      </S.Header>
      <S.Main>
        <CardCar
          brand="Volkswagen"
          model="Gol"
          description="Veiculo sem posicoes com ignicao desligada"
        />
      </S.Main>
      <Footer />
    </>
  )
}

export default Home
