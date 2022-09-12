import React from 'react';

export const Total = ({parts}) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)

  return (
    <p>
      <strong>Number of exercices {total}</strong>
    </p>
  )
}
