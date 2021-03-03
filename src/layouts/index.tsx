import React from 'react'
import * as S from './styled'

type Props = {
  children: React.ReactChild
}
const Layout: React.FC<Props> = ({ children }) => {
  return <S.LayoutWaraper>{children}</S.LayoutWaraper>
}

export default Layout
