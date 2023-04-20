import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState('Loading...')

  const refreshRandomFact = () => {
    getRandomFact().then((fact) => setFact(fact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
