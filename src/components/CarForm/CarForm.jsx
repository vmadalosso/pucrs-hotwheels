import React, { useState } from "react"
import styles from "./CarForm.module.css"

export const CarForm = ({ onSubmit }) => {
  const [model, setModel] = useState("")
  const [brand, setBrand] = useState("")
  const [color, setColor] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ model, brand, color, year })
    setModel("")
    setBrand("")
    setColor("")
    setYear("")
  }

  // função switch/case para validar se os dados do formulário foram preenchidos
  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "model":
        setModel(value)
        break
      case "brand":
        setBrand(value)
        break
      case "color":
        setColor(value)
        break
      case "year":
        setYear(value)
        break
      default:
        break
    }
  }

  // mensagem personalizada utilizando setCustomValidity do js
  const handleInvalid = (e) => {
    e.target.setCustomValidity("Favor preencher este campo corretamente")
  }

  const handleInputBlur = (e) => {
    e.preventDefault()
    e.target.setCustomValidity("")
  }

  return (
    <form className={styles.carForm} onSubmit={handleSubmit}>
      <div>
        <span>Modelo:</span>
        <input
          type="text"
          name="model"
          placeholder="Ex.: Fusca"
          value={model}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <span>Marca:</span>
        <input
          type="text"
          name="brand"
          placeholder="Ex.: Volkswagen"
          value={brand}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <span>Cor:</span>
        <input
          type="text"
          name="color"
          placeholder="Ex.: Azul"
          value={color}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <span>Ano:</span>
        <input
          type="number"
          name="year"
          placeholder="Ex.: 1971"
          value={year}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>

      <button type="submit">Adicionar</button>
    </form>
  )
}
