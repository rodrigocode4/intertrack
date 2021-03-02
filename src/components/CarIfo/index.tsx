import React from 'react'
import * as S from './styled'

type Props = {
  brand: string
  model: string
  ignition: boolean
  description: string
}

const CarIfo: React.FC<Props> = ({ brand, model, ignition, description }) => {
  return (
    <S.WrapperCarIfo>
      <S.BrandAndModel>
        {brand}, {model}
      </S.BrandAndModel>
      <S.Ignition>Ignição {ignition ? 'ligada' : 'desligada'}</S.Ignition>
      <S.Description>{description}</S.Description>
    </S.WrapperCarIfo>
  )
}

export default CarIfo
