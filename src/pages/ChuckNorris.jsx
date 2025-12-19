import { useEffect, useState } from 'react'

export default function ChuckNorris() {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(setJoke)
  }, [])

  if (!joke) return <p>Carregando...</p>

  return (
    <div>
      <img src={joke.icon_url} />
      <p><strong>{joke.value}</strong></p>
    </div>
  )
}