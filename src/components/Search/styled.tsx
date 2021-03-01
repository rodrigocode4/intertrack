import styled from 'styled-components'

export const SearchWrapper = styled.div``

export const SearchInput = styled.input`
  width: 18.0625rem;
  height: 3.6875rem;
  font-size: 1.375rem;
  padding-left: 1.25rem;
  border-radius: 0.625rem;
  background: var(--bg-secondary);
  border: none;
  font-family: Roboto;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  color: var(--text-primary);
  text-transform: uppercase;

  &::placeholder {
    font-family: Roboto;
    font-style: italic;
    font-size: 1.375rem;
    color: var(--text-primary-placeholder);
    text-transform: lowercase;
  }
`
