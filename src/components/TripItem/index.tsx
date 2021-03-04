import React from 'react'
import * as S from './styled'

type Position = {
  address: string
  datetime: number
  hodometro: number
  id: number
  ignition: boolean
  latitude: number
  longitude: number
  vehicleId: number
}

type Props = {
  firstPosition: Position
  lastPosision: Position
}

const TripItem: React.FC<Props> = ({ firstPosition, lastPosision }) => {
  const startPosition = firstPosition.hodometro
  const finalPosition = lastPosision.hodometro
  const distanceTrip = (finalPosition - startPosition) / 100

  const startDay = firstPosition.datetime
  const finalDay = lastPosision.datetime

  const timeDiff = Math.abs(finalDay - startDay)
  const timeOfTrip = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return (
    <S.WrapperTripItem>
      <S.Distance>Distância: {distanceTrip} km</S.Distance>
      <S.TimeOfTravel>
        Tempo de viagem: {timeOfTrip} {timeOfTrip > 1 ? 'dias' : 'dia'}
      </S.TimeOfTravel>
      <S.HR />
      <S.Details>
        <S.Sumary>Detalhes</S.Sumary>
        <S.TitleTrip>Partida</S.TitleTrip>
        <S.Span>
          <S.P title="Data"></S.P>
          <S.P title="Latitude">Latitude: {firstPosition.latitude}</S.P>
          <S.P title="Longitude">Longitude: {firstPosition.longitude}</S.P>
          <S.P title="Endereço">Endereço: {firstPosition.address}</S.P>
          <S.P title="Ignição">Ignição: {String(firstPosition.ignition)}</S.P>
        </S.Span>
        <S.HR />
        <S.TitleTrip>Chegada</S.TitleTrip>
        <S.Span>
          <S.P title="Data"></S.P>
          <S.P title="Latitude">Latitude: {lastPosision.latitude}</S.P>
          <S.P title="Longitude">Longitude: {lastPosision.longitude}</S.P>
          <S.P title="Endereço">Endereço: {lastPosision.address}</S.P>
          <S.P title="Ignição">Ignição: {String(lastPosision.ignition)}</S.P>
        </S.Span>
      </S.Details>
    </S.WrapperTripItem>
  )
}

export default TripItem
