import React from 'react'
import SizetableModalBlock from '../blocks/SizetableModalBlock/SizetableModalBlock'

const SizeTable = ({isVisibleSizetable, setIsVisibleSizetable}) => {
  return (
    <>
      <SizetableModalBlock isVisibleSizetable={isVisibleSizetable}
      setIsVisibleSizetable={setIsVisibleSizetable} />
    </>
  )
}

export default SizeTable