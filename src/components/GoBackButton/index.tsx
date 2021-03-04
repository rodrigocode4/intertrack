import React from 'react'
import * as S from './styled'

const GoBackButton = () => {
  return (
    <S.WrapperLinkedButton to="/">
      <S.Button>
        <S.Icon />
        <span>Voltar</span>
      </S.Button>
    </S.WrapperLinkedButton>
  )
}

export default GoBackButton
