import React from 'react'

const Heading = ({txt , className}) => {
  return (
    <h1 className={`${className} lg:text-5xl md:text-4xl text-3xl text-black font-roboto font-medium`}>{txt}</h1>
  )
}

export default Heading