import React, { useEffect, useState } from 'react'
import * as S from './styled'
import TripItem from 'components/TripItem'
import getTrip from 'utils'

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
  positions: Array<Position>
}

const TripList: React.FC<Props> = ({ positions }) => {
  const [trips, setTrips] = useState<Array<Array<Position>>>()

  useEffect(() => {
    const trips = getTrip(positions)
    setTrips(trips)
  }, [positions])

  return (
    <>
      <S.UL>
        {trips?.map((trip: Array<Position>, index) => {
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
    </>
  )
}

export default TripList
