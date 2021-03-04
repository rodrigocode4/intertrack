import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 1.8rem;
  left: 0.2rem;
  width: 4.1rem;
  padding: 0;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  filter: drop-shadow(0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25));
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const Icon = styled(ChevronLeft)`
  width: 1.3rem;
  height: 1.3rem;
  stroke: var(--bg-secondary);
  stroke-width: 2;
`

export const WrapperLinkedButton = styled(Link)`
  text-decoration: none;
`
