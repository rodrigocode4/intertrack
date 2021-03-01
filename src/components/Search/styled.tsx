import styled from 'styled-components'
import { Search } from '@styled-icons/heroicons-outline/Search'

export const Form = styled.form`
  width: 18.0625rem;
  height: 3.6875rem;
  border-radius: 0.625rem;
  background-color: var(--bg-secondary);
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  display: flex;
`

export const SearchInput = styled.input`
  width: 83%;
  height: inherit;
  border-radius: 0.625rem 0 0 0.625rem;
  padding-left: 1.25rem;
  font-size: 1.375rem;
  background-color: transparent;
  border: none;
  font-family: Roboto;
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

export const SearchButtonIcon = styled(Search)`
  color: var(--text-primary);
  width: 1.7rem;
  height: 1.7rem;
`

export const SearchButton = styled.button`
  width: 17%;
  height: inherit;
  padding: 0;
  border: 0;
  background-color: transparent;
  border-radius: 0 0.625rem 0.625rem 0;
  border-left: 1px solid var(--text-primary-placeholder);

  &:hover {
    cursor: pointer;
  }
`
