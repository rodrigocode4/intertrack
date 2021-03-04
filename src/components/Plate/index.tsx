import React from 'react'
import * as S from './styled'
import { usePlate } from 'utils/context'

type Props = S.PlateWrapperProps & S.ValuePlate

const Plate: React.FC<Props> = ({ width, heigth, fontSize }) => {
  const { plate } = usePlate()
  return (
    <S.PlateWrapper width={width} heigth={heigth}>
      <S.Stripe width={width} heigth={heigth} />
      <S.ValuePlate isFilled={!!plate} fontSize={fontSize}>
        {plate || 'XYZ-1234'}
      </S.ValuePlate>
    </S.PlateWrapper>
  )
}

export default Plate
