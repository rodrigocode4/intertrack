import React from 'react'
import * as S from './styled'
import { usePlate } from 'utils/context'

const GoBackButton = () => {
  const { setPlate } = usePlate()
  return (
    <S.WrapperLinkedButton to="/">
      <S.Button onClick={() => setPlate('')}>
        <S.Icon />
        <span>Voltar</span>
      </S.Button>
    </S.WrapperLinkedButton>
  )
}

export default GoBackButton
