import React from 'react'
import * as S from './styled'

type Props = {
  message: string
}

const NotFound: React.FC<Props> = ({ message }) => {
  return (
    <S.NotFoudWrapper>
      <S.Title>{message}</S.Title>
      <S.Status>404</S.Status>
    </S.NotFoudWrapper>
  )
}

export default NotFound
