import React from 'react'
import * as S from './styled'
import Logo from 'components/Logo'
import Plate from 'components/Plate'
import Search from 'components/Search'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <>
      <S.Header>
        <Logo />
        <Plate />
        <Search />
      </S.Header>
      <S.Main />
      <Footer />
    </>
  )
}

export default Home
