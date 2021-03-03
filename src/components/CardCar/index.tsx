import React from 'react'
import * as S from './styled'

type Props = {
  vehicleId: number
  brand: string
  model: string
  description: string
}

const CardCar: React.FC<Props> = ({ vehicleId, brand, model, description }) => {
  return (
    <S.WrapperLinkedCardCar to={`${vehicleId}/positions`}>
      <S.WrapperCardCar>
        <S.CarBrand>{brand}</S.CarBrand>
        <S.CarModel>{model}</S.CarModel>
        <S.HR />
        <S.CarDescription>{description}</S.CarDescription>
      </S.WrapperCardCar>
    </S.WrapperLinkedCardCar>
  )
}

export default CardCar
