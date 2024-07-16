import React from 'react'

const Actuelle_section = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-7  items-center lg:items-start text-center lg:text-start'>
            {children}
          </div>
          <hr/>
          </div>
  )
}

export default Actuelle_section
