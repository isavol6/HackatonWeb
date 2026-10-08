"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./Formulario.module.css";

type Datos = {
  username: string;
  fullName: string;
  age: number;
};

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [errores, setErrores] = useState({username: "", fullName: "", age: ""});
  const [datosEnviados, setDatosEnviados] = useState<Datos | null>(null);

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const usuarioLimpio = username.trim();
    const nombreLimpio = fullName.trim();
    const edadNumerica = Number(age);
    const nuevosErrores = {username: "", fullName: "", age: ""};

    // validar username
    if (usuarioLimpio === "") {
      nuevosErrores.username = "El usuario es obligatorio.";
    } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(usuarioLimpio)) {
      nuevosErrores.username = "Username inválido";
    }

    // validar nombre
    if (nombreLimpio === "") {
      nuevosErrores.fullName = "Nombre obligatorio";
    } else if (nombreLimpio.length < 2 || nombreLimpio.length > 80) {
      nuevosErrores.fullName = "Nombre inválido";
    } else if (!/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(nombreLimpio)) {
      nuevosErrores.fullName =
        "Nombre inválido";
    }

    // validar edad
    if (age.trim() === "") {
      nuevosErrores.age = "Edad obligatria";
    } else if (
      !Number.isInteger(edadNumerica) ||
      edadNumerica < 1 ||
      edadNumerica > 120
    ) {
      nuevosErrores.age = "Edad inválida";
    }

    // revisar si hay o no errores
    setErrores(nuevosErrores);
    if (
      nuevosErrores.username !== "" || nuevosErrores.fullName !== "" || nuevosErrores.age !== ""
    ) {
      setDatosEnviados(null);
      return;
    }

    // guardo cuando no haya errores
    setDatosEnviados({username: usuarioLimpio, fullName: nombreLimpio, age: edadNumerica,});
  }

  return (
    <div className={styles.contenedor}>
      <form
        className={styles.formulario}
        onSubmit={enviarFormulario}
        noValidate
      >
        <div className={styles.campo}>
          <label htmlFor="username">Username:</label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(evento) => setUsername(evento.target.value)}
            aria-invalid={errores.username !== ""}
            aria-describedby="error-username"
          />

          <span id="error-username" className={styles.error}>
            {errores.username}
          </span>
        </div>

        <div className={styles.campo}>
          <label htmlFor="fullName">FullName:</label>

          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(evento) => setFullName(evento.target.value)}
            aria-invalid={errores.fullName !== ""}
            aria-describedby="error-fullName"
          />

          <span id="error-fullName" className={styles.error}>
            {errores.fullName}
          </span>
        </div>

        <div className={styles.campo}>
          <label htmlFor="age">Age:</label>

          <input
            id="age"
            type="number"
            min="1"
            max="120"
            step="1"
            value={age}
            onChange={(evento) => setAge(evento.target.value)}
            aria-invalid={errores.age !== ""}
            aria-describedby="error-age"
          />

          <span id="error-age" className={styles.error}>
            {errores.age}
          </span>
        </div>

        <button className={styles.boton} type="submit">
          Submit
        </button>
      </form>

      <div className={styles.resultado} aria-live="polite">
        {datosEnviados && (
          <>
            <h2>Datos enviados</h2>

            <ul>
              <li>User{datosEnviados.username}</li>
              <li>Name: {datosEnviados.fullName}</li>
              <li>Age: {datosEnviados.age}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}