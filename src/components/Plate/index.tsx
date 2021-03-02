import React from 'react'
import * as S from './styled'
type Props = S.PlateWrapperProps & S.ValuePlate

const Plate: React.FC<Props> = ({ width, heigth, fontSize }) => {
  return (
    <S.PlateWrapper width={width} heigth={heigth}>
      <S.Stripe width={width} heigth={heigth} />
      <S.ValuePlate fontSize={fontSize}>XYZ-1234</S.ValuePlate>
    </S.PlateWrapper>
  )
}

export default Plate
