import React from 'react'

const SubHeading = ({className , txt}) => {
  return (
        <h1 className={`${className} lg:text-3xl md:text-2xl text-xl text-black font-roboto font-medium`}>{txt}</h1>

  )
}

export default SubHeading