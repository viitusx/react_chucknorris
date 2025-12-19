import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <img src="https://cataas.com/cat" width="40" style={{ borderRadius: '50%' }} />
      <Link to="/">Navegador</Link>
      <Link to="/chuck">Chuck Norris</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  )
}