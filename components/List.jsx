import React from 'react'

const List = ({txt , className}) => {
  return (
    <li className={`${className} text-black font-sans font-normal lg:text-base text-sm list-none`}>{txt}</li>
  )
}

export default List