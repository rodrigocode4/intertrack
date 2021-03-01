import React from 'react'
import FullLogo from 'assets/full-logo.png'
import * as S from './styled'

const Logo = () => {
  return (
    <S.Logo
      src={FullLogo as string}
      alt="Imagem com logo da Intertrack Tecnologia"
    />
  )
}

export default Logo
