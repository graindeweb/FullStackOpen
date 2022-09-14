import React from 'react'

export const Search = ({ searchValue, onchangeHandler }) => {
  return (
    <div>
      Filter shown with <input value={searchValue} onChange={onchangeHandler} />
    </div>
  )
}
