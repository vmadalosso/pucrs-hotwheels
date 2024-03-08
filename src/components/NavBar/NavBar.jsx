import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/lista">Lista</Link>
        </li>
        <li>
          <Link to="/adicionar">Adicionar Carro</Link>
        </li>
      </ul>
    </nav>
  )
}
