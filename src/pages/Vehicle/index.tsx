import React from 'react'
import * as S from './styled'
import Plate from 'components/Plate'
import Footer from 'components/Footer'
import TripList from 'components/TripList'
import GoBackButton from 'components/GoBackButton'
import CarIfo from 'components/CarIfo'

const Vehicle = () => {
  return (
    <>
      <S.Header>
        <GoBackButton />
        <Plate width={9.9375} heigth={3.75} fontSize={1.5} />
        <CarIfo
          brand="Volkswagen"
          model="Gol"
          ignition={true}
          description="Veiculo sem posicoes com ignicao desligada"
        />
        <S.WrapperTitle>
          <S.TitleTrips>Viagens</S.TitleTrips>
        </S.WrapperTitle>
      </S.Header>
      <S.Main>
        <TripList />
      </S.Main>
      <Footer />
    </>
  )
}

export default Vehicle
