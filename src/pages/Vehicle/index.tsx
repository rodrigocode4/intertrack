import React, { useEffect, useState } from 'react'
import * as S from './styled'
import Plate from 'components/Plate'
import Footer from 'components/Footer'
import CarIfo from 'components/CarIfo'
import TripList from 'components/TripList'
import GoBackButton from 'components/GoBackButton'
import NotFound from 'components/NotFound'

import { useParams, useLocation } from 'react-router-dom'
import { usePlate } from 'utils/context'
import getTrip from 'utils'

type PositionType = {
  address: string
  datetime: number
  hodometro: number
  id: number
  ignition: boolean
  latitude: number
  longitude: number
  vehicleId: number
}

type VehicleType = {
  id: number
  name: string
  description: string
  brand: string
  model: string
}

const VehicleNotFound = NotFound
const TripNotFound = NotFound

const Vehicle = () => {
  const params = useParams() as { id: string }
  const { pathname } = useLocation()
  const { setPlate } = usePlate()

  const [vehicle, setVehicle] = useState<VehicleType>()
  const [isNotFountVehicle, setIsNotFountVehicle] = useState(false)

  const [trips, setTrips] = useState<Array<Array<PositionType>>>()

  const fetchData = async () => {
    try {
      const { REACT_APP_API_URL } = process.env
      if (REACT_APP_API_URL) {
        // TODO - compor em duas funções
        const positionsRS = await fetch(`${REACT_APP_API_URL}${pathname}`)
        const positionsJSON = (await positionsRS.json()) as Array<PositionType>
        //setPositions(positionsJSON)
        const trips = getTrip(positionsJSON)
        setTrips(trips)

        const vehicleRS = await fetch(`${REACT_APP_API_URL}/${params.id}`)
        const vehicleJSON = (await vehicleRS.json()) as VehicleType
        setVehicle(vehicleJSON)
        setPlate(vehicleJSON.name)
      }
    } catch (error) {
      setIsNotFountVehicle(true)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isTripValid = (): boolean =>
    trips !== undefined && trips[0] !== undefined && trips[0].length > 0

  return (
    <>
      <S.Header>
        <GoBackButton />
        <Plate width={9.9375} heigth={3.75} fontSize={1.5} />
        {vehicle && (
          <CarIfo
            brand={vehicle.brand}
            model={vehicle.model}
            description={vehicle.description}
          />
        )}
        <S.WrapperTitle>
          {!isNotFountVehicle && <S.TitleTrips>Viagens</S.TitleTrips>}
        </S.WrapperTitle>
      </S.Header>
      <S.Main>
        {isTripValid() ? (
          <TripList trips={trips} />
        ) : (
          !isNotFountVehicle && (
            <TripNotFound message="Nenhuma viagem encontrada!" />
          )
        )}

        {isNotFountVehicle && (
          <VehicleNotFound message="Veículo não encontrado!" />
        )}
        {console.log(trips)}
      </S.Main>
      <Footer />
    </>
  )
}

export default Vehicle
