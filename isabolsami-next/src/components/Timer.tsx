"use client";

import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (!activo) return;

    // aumentar segundos
    const intervalo = window.setInterval(() => {
        setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalo);
    };
  }, [activo]);

  const iniciar = () => {setActivo(true)};

  const detener = () => {setActivo(false)};

  const reiniciar = () => {setActivo(false); setSegundos(0);};

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  return (
    <section className={styles.contenedor}>
      <h3>Timer</h3>
      <div className={styles.tiempo}>
        {minutos} mins {segundosRestantes} secs
      </div>

      <div className={styles.botones}>
        <button
          type="button"
          className={styles.iniciar}
          onClick={iniciar}
          disabled={activo}
        >
          Start
        </button>

        <button
          type="button"
          className={styles.detener}
          onClick={detener}
          disabled={!activo}
        >
          Stop
        </button>

        <button
          type="button"
          className={styles.reiniciar}
          onClick={reiniciar}
        >
          Reset
        </button>
      </div>
    </section>
  );
}