import styled from 'styled-components'

export const WrapperCardCar = styled.div`
  width: 18.0625rem;
  background-color: var(--bg-secondary);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  padding: 1.25rem 2.0625rem 1.0625rem 2.25rem;
  border-left: 0.5rem solid var(--bg-primary);
  box-sizing: border-box;
`

export const CarBrand = styled.h1`
  color: var(--text-primary);
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.375rem;
`

export const CarModel = styled.h2`
  color: var(--text-primary);
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.15rem;
`

export const HR = styled.hr`
  background-color: var(--bg-primary);
  border: 0;
  height: 2px;
  margin-bottom: 1rem;
`

export const CarDescription = styled.strong`
  color: var(--text-primary);
  font-family: Roboto;
  font-size: 1.125rem;
`
