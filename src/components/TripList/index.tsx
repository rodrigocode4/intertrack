import React from 'react'
import * as S from './styled'
import TripItem from 'components/TripItem'

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
  trips: Array<Array<Position>> | undefined
}

const TripList: React.FC<Props> = ({ trips }) => {
  return (
    <>
      {trips?.length === 0 ? null : (
        <S.UL data-cy="trip-list">
          {trips?.map((trip: Array<Position>, index) => {
            if (trip.length < 1) return null
            const firstPosition: Position = trip[0]
            const lastPosision: Position = trip[trip.length - 1]
            return (
              <S.LI key={index}>
                <TripItem
                  firstPosition={firstPosition}
                  lastPosision={lastPosision}
                />
              </S.LI>
            )
          })}
        </S.UL>
      )}
    </>
  )
}

export default TripList
