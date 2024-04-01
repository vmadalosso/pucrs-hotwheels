import React from "react";
import { CarDetail } from "../CarDetail/CarDetail";
import { useNavigate } from "react-router-dom";
import styles from "./CarList.module.css"; // Importa o arquivo CSS Module

export const CarList = ({ cars, onDeleteCar }) => {
  const navigate = useNavigate();

  const handleAddCar = () => {
    navigate("/adicionar"); // redirect para a página de adicionar carro
  };

  return (
    <div className={styles.container}> {/* Aplica a classe do CSS Module */}
      <h2>Lista de Carros</h2>
      <ul className={styles.carList}> {/* Aplica a classe do CSS Module */}
        {cars.map((car) => (
          <li key={car.id} className={styles.carItem}> {/* Adiciona a classe do CSS Module */}
            <CarDetail car={car} onDeleteCar={onDeleteCar} />
          </li>
        ))}
      </ul>
      <button className={styles.addButton} onClick={handleAddCar}>Add Novo Carro</button> {/* Aplica a classe do CSS Module */}
    </div>
  );
};
