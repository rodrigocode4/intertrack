import styled from 'styled-components'

type REM = number

export type PlateWrapperProps = {
  width?: REM
  heigth?: REM
}
export const PlateWrapper = styled.div<PlateWrapperProps>`
  width: ${({ width = 18.0625 }) => `${width}rem`};
  height: ${({ heigth = 7.4375 }) => `${heigth}rem`};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-plate-primary);
  filter: drop-shadow(0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`

type StripeProps = PlateWrapperProps
export const Stripe = styled.div<StripeProps>`
  width: ${({ width = 18.0625 }) => `${width / 1.334}rem`};
  height: ${({ heigth = 7.4375 }) => `${heigth * 0.112}rem`};
  background-color: var(--bg-plate-secondary);
  border: 1px solid var(--bg-plate-secondary);
  box-shadow: inset 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`

export type ValuePlate = { fontSize?: REM; isFilled?: boolean }
export const ValuePlate = styled.h1<ValuePlate>`
  background-color: transparent;
  font-size: ${({ fontSize = 3 }) => `${fontSize}rem`};
  margin-top: 0.625rem;
  font-family: Roboto;
  color: ${({ isFilled }) =>
    `var(${isFilled ? '--text-plate' : '--text-plate-secondary'})}`};
`
