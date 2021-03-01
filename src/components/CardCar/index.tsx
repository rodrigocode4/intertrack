import React from 'react'
import * as S from './styled'

type Props = {
  brand: string
  model: string
  description: string
}

const CardCar: React.FC<Props> = ({ brand, model, description }) => {
  return (
    <S.WrapperCardCar>
      <S.CarBrand>{brand}</S.CarBrand>
      <S.CarModel>{model}</S.CarModel>
      <S.HR />
      <S.CarDescription>{description}</S.CarDescription>
    </S.WrapperCardCar>
  )
}

export default CardCar
