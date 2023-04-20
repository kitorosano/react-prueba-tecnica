import { useEffect, useState } from 'react'

export const CAT_ENDPOINT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`${CAT_ENDPOINT_IMAGE_URL}?id=${firstWord}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching image')
        }
        return response.json()
      })
      .then((data) => {
        const { url } = data[0]
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
