import styled from 'styled-components'

export const PlateWrapper = styled.div`
  width: 18.0625rem;
  height: 7.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-plate-primary);
  filter: drop-shadow(0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`

export const Stripe = styled.div`
  width: 13.75rem;
  height: 0.9125rem;
  background-color: var(--bg-plate-secondary);
  border: 1px solid var(--bg-plate-secondary);
  box-shadow: inset 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`

export const Value = styled.h1`
  background-color: transparent;
  font-size: 3rem;
  margin-top: 0.625rem;
  font-family: Roboto;
  color: var(--text-plate-secondary);
`
