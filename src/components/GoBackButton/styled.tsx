import styled from 'styled-components'
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 2rem;
  left: 1.375rem;
  width: 4.1rem;
  padding: 0;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  filter: drop-shadow(0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25));
  border: none;
`

export const Icon = styled(ChevronLeft)`
  width: 1.3rem;
  height: 1.3rem;
  stroke: var(--bg-secondary);
  stroke-width: 2;
`
