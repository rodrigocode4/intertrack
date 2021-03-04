import React, { useEffect, useState } from 'react'
import * as S from './styled'
import Plate from 'components/Plate'
import Footer from 'components/Footer'
import CarIfo from 'components/CarIfo'
import TripList from 'components/TripList'
import GoBackButton from 'components/GoBackButton'
import VehicleNotFound from 'components/VehicleNotFound'

import { useParams, useLocation } from 'react-router-dom'

type PositionsType = {
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

const Vehicle = () => {
  const params = useParams() as { id: string }
  const { pathname } = useLocation()
  const [vehicle, setVehicle] = useState<VehicleType>()
  const [positions, setPositions] = useState<Array<PositionsType>>()
  const [isNotFountVehicle, setIsNotFountVehicle] = useState(false)

  const fetchData = async () => {
    try {
      const { REACT_APP_API_URL } = process.env
      if (REACT_APP_API_URL) {
        // TODO - compor em duas funções
        const positionsRS = await fetch(`${REACT_APP_API_URL}${pathname}`)
        const positionsJSON = (await positionsRS.json()) as Array<PositionsType>
        setPositions(positionsJSON)

        const vehicleRS = await fetch(`${REACT_APP_API_URL}/${params.id}`)
        const vehicleJSON = (await vehicleRS.json()) as VehicleType
        setVehicle(vehicleJSON)
      }
    } catch (error) {
      setIsNotFountVehicle(true)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {positions !== undefined && <TripList positions={positions} />}
        {isNotFountVehicle && <VehicleNotFound />}
      </S.Main>
      <Footer />
    </>
  )
}

export default Vehicle
