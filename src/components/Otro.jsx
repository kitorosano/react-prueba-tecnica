import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

function Otro() {
  const { imageUrl } = useCatImage({ fact: 'Otro' })
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Image extracted using the first word Otro'
        />
      )}
    </>
  )
}

export default Otro
