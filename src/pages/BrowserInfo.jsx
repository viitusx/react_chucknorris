import { useEffect, useState } from 'react'

export default function BrowserInfo() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://www.apicagent.com/')
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return <p>Carregando...</p>

  return (
    <div>
      <h2>Informações do Navegador</h2>
      <p>Browser Family: {data.browser_family}</p>
      <p>Version: {data.version}</p>
      <p>Brand: {data.brand}</p>
      <p>Type: {data.type}</p>
      <p>OS Family: {data.os_family}</p>
    </div>
  )
}