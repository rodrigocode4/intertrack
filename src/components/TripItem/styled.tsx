import styled from 'styled-components'

export const WrapperTripItem = styled.div`
  width: 18.0625rem;
  height: auto;
  background-color: var(--bg-secondary);
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
  padding: 1.5625rem 1.5625rem 0.9375rem 1.5625rem;
`

export const Distance = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.125rem;
  color: var(--text-primary);
`

export const TimeOfTravel = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 1rem;
  color: var(--text-primary);
`

export const HR = styled.hr`
  background-color: var(--bg-primary);
  border: 0;
  height: 2px;
  margin-bottom: 1rem;
`

export const Details = styled.details`
  color: var(--text-primary);
  background-color: var(--text-plate-secondary);
  border-radius: 0.625rem;
  &:hover {
    cursor: pointer;
  }
`

export const Sumary = styled.summary`
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  color: var(--text-primary);
`

export const Span = styled.span`
  padding-top: 1rem;
`

export const P = styled.p`
  margin-left: 0.5rem;
`

export const TitleTrip = styled.h1`
  text-align: center;
`
