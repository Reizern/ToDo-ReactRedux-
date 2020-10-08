import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Показати: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} >
      Всі
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Активні
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Виконані
    </FilterLink>
  </div>
)

export default Footer
