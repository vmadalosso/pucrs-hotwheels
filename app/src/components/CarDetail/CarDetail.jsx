// CarDetail.jsx

import React from "react";
import Button from "../Button/Button"; // Importa o componente de botão
import styles from "../Button/Button.module.css"

export const CarDetail = ({ car: { id, model, brand }, onDeleteCar }) => {
  const handleDelete = () => {
    onDeleteCar(id);
  };

  return (
    <li className={styles.carDetail}>
      <div>
        {model} - {brand}{" "}
        <Button onClick={handleDelete} variant="danger">
          Excluir
        </Button>
      </div>
    </li>
  );
};
