import styled from 'styled-components'

export const Header = styled.header`
  max-width: 27.75rem;
  width: auto;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin: auto;
`

export const Main = styled.main`
  height: calc(100% - 21.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

export const TitleTrips = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.75rem;
  color: var(--text-secondary);
`

export const WrapperTitle = styled.span`
  width: auto;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.2rem;
`
