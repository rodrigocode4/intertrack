import React from 'react'
import * as S from './styled'

type Props = {
  distance: number
  TimeOfTravel: string
}

const TripItem: React.FC<Props> = ({ distance, TimeOfTravel }) => {
  return (
    <S.WrapperTripItem>
      <S.Distance>Distância: {distance}km</S.Distance>
      <S.TimeOfTravel>Tempo de viagem: {TimeOfTravel}h</S.TimeOfTravel>
      <S.HR />
      <S.Details>
        <S.Sumary></S.Sumary>
        {/* add map */}
      </S.Details>
    </S.WrapperTripItem>
  )
}

export default TripItem
