import React from "react"

// components CarDetail onde utilizo desestruturação do car props
export const CarDetail = ({ car: { id, model, brand }, onDeleteCar }) => {
  const handleDelete = () => {
    onDeleteCar(id)
  }

  return (
    <li>
      <div>
        {model} - {brand} <button onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  )
}
