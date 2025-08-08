import React from 'react'

const FootList = ({txt , className}) => {
  return (
    <li className={`${className} text-sm text-color4 font-sans list-none cursor-pointer`}>{txt}</li>
  )
}

export default FootList