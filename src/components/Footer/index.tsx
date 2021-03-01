import React from 'react'
import * as S from './styled'

const Footer = () => {
  return (
    <S.Footer>
      <S.Copyright>
        Intertrack Tecnologia &copy; {new Date().getFullYear()}
      </S.Copyright>
    </S.Footer>
  )
}

export default Footer
