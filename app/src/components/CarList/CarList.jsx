import { CarDetail } from "../CarDetail/CarDetail"
import { useNavigate } from "react-router-dom"

export const CarList = ({ cars, onDeleteCar }) => {
  const navigate = useNavigate()

  const handleAddCar = () => {
    navigate("/adicionar") // redirect para a página de adicionar carro
  }

  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {cars.map((car) => (
          <CarDetail key={car.id} car={car} onDeleteCar={onDeleteCar} />
        ))}
      </ul>
      <button onClick={handleAddCar}>Add Novo Carro</button>
    </div>
  )
}
