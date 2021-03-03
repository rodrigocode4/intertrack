import React from 'react'
import * as S from './styled'

const VehicleNotFound: React.FC = () => {
  return (
    <S.NotFoudWrapper>
      <S.Title>Veículo não encontrado!</S.Title>
      <S.Status>404</S.Status>
    </S.NotFoudWrapper>
  )
}

export default VehicleNotFound
