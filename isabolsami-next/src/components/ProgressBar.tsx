"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const [porcentaje, setPorcentaje] = useState(0);
  const manejarCambio = (e: ChangeEvent<HTMLInputElement>) => {
  const valor = Number(e.target.value);

    if (Number.isFinite(valor) && valor >= 0 && valor <= 100) {
      setPorcentaje(valor);
    }
  };

  return (
    <section className={styles.contenedor}>

      <div
        className={styles.barraExterior}
        role="progressbar"
        aria-label="Porcentaje de progreso"
        aria-valuenow={porcentaje}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={styles.barraInterior}
          style={{ width: `${porcentaje}%` }}
        >
          {porcentaje > 0 && `${porcentaje}%`}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="porcentaje">Porcentaje</label>

        <input
          id="porcentaje"
          type="number"
          min={0}
          max={100}
          value={porcentaje}
          onChange={manejarCambio}
        />
      </div>
    </section>
  );
}