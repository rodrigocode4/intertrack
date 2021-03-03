import React, {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  ChangeEvent
} from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const history = useHistory()
  const [plateNumber, setPlateNumber] = useState('')

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!plateNumber) {
      history.push({ pathname: '/' })
    } else {
      history.push({ pathname: '/', search: `q=${plateNumber}` })
    }
  }

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase().trim()
    setPlateNumber(value)
  }, [])

  useEffect(() => {
    const plateNumber =
      new URLSearchParams(history.location.search).get('q') || ''
    setPlateNumber(plateNumber)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Form>
      <S.SearchInput
        pattern="^[a-zA-Z]{3}-\d{4}$"
        name="plate"
        placeholder="Pesquisar placa..."
        value={plateNumber}
        onChange={handleChange}
      />
      <S.SearchButton onClick={handleClick}>
        <S.SearchButtonIcon />
      </S.SearchButton>
    </S.Form>
  )
}

export default Search
