import React from 'react'
import * as S from './styled'

type Props = {
  brand: string
  model: string
  description: string
}

const CarIfo: React.FC<Props> = ({ brand, model, description }) => {
  return (
    <S.WrapperCarIfo>
      <S.BrandAndModel>
        {brand}, {model}
      </S.BrandAndModel>
      <S.Description>{description}</S.Description>
    </S.WrapperCarIfo>
  )
}

export default CarIfo
