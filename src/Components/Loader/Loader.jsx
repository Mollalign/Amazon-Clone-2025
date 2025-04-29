import React from 'react'
import {FadeLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[50vh]'>
      <FadeLoader color="#36d7b7"/>
    </div>
  )
}

export default Loader