import React from 'react'
import * as S from './styled'

const Search = () => {
  return (
    <S.SearchWrapper>
      <S.SearchInput
        pattern="^[a-zA-Z]{3}-\d{4}$"
        placeholder="Pesquisar placa..."
      />
    </S.SearchWrapper>
  )
}

export default Search
