import React from 'react'
import * as S from './styled'

const Search = () => {
  return (
    <S.Form>
      <S.SearchInput
        pattern="^[a-zA-Z]{3}-\d{4}$"
        placeholder="Pesquisar placa..."
      />
      <S.SearchButton>
        <S.SearchButtonIcon />
      </S.SearchButton>
    </S.Form>
  )
}

export default Search
