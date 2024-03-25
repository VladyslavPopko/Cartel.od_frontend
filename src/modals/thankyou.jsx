import React from 'react'
import ThankyouBlock from '../blocks/ThanyouBlock/ThankyouBlock'

const Thankyou = ({isVisibleThankyou, setIsVisibleThankyou}) => {
  return (
    <div>
      <ThankyouBlock isVisibleThankyou={isVisibleThankyou} setIsVisibleThankyou={setIsVisibleThankyou}/>
    </div>
  )
}

export default Thankyou