import React, { useState, useEffect, useCallback } from 'react'
import * as S from './styled'
import Logo from 'components/Logo'
import Plate from 'components/Plate'
import Search from 'components/Search'
import Footer from 'components/Footer'
import CardCar from 'components/CardCar'
import VehicleNotFound from 'components/VehicleNotFound'

import { useLocation } from 'react-router-dom'

type VehicleType = {
  id: number
  name: string
  description: string
  brand: string
  model: string
}

type ListVehiclesType = Array<VehicleType>

const Home = () => {
  const { search } = useLocation()

  const [vehicle, setVehicle] = useState<VehicleType>()
  const [listVehicles, setListVehicles] = useState<ListVehiclesType>()
  const [isNotFountVehicle, setIsNotFountVehicle] = useState(false)

  const setVehicleState = useCallback(
    (plateNumber: string) => {
      if (plateNumber === '') {
        setIsNotFountVehicle(false)
        return
      }
      const filterVehicle = ({ name }: { name: string }) => name === plateNumber
      const vehicle = listVehicles?.filter(filterVehicle)[0] as VehicleType
      if (vehicle === undefined) {
        setIsNotFountVehicle(true)
      }
      setVehicle(vehicle)
    },
    [listVehicles]
  )

  const fetchData = async () => {
    try {
      const { REACT_APP_API_URL } = process.env
      const rs = await fetch(REACT_APP_API_URL || '')
      const data = await rs.json()
      setListVehicles(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const queryValue = new URLSearchParams(search).get('q')?.trim() || ''
    setVehicleState(queryValue)
  }, [search, setVehicleState])

  return (
    <>
      <S.Header>
        <Logo />
        <Plate />
        <Search />
      </S.Header>
      <S.Main>
        {(vehicle && (
          <CardCar
            brand={vehicle.brand}
            model={vehicle.model}
            description={vehicle.description}
          />
        )) ||
          (isNotFountVehicle && <VehicleNotFound />)}
      </S.Main>
      <Footer />
    </>
  )
}

export default Home
