import { useEffect, useRef, useState } from "react";

import axios from "axios";

// importo el toast personalizado
import Toast from "../shared/Toast";

// importo para poder usar mi funcion que valida si la url es correcta
import validateUrl from "../../services/validateUrl";

import styles from "./css/form.module.css";
import useWidth from "../../hooks/useWidth";

const Form = ({ setLoading, setShortUrl }) => {
  
  const inputRef = useRef();
  
  const { width } = useWidth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = inputRef.current.value;

    // paso la url por parametro de la funcion para validar si es una url valida
    const validate = validateUrl(url);

    if (url.length === 0) {
      return Toast("error", "No escribiste ninguna url", width);
    }

    if (!validate) {
      inputRef.current.value = "";
      return Toast("info", "la url no es valida", width);
    }

    //Seteo a true para que se renderice mi loading
    setLoading(true); //false

    //Me aseguro de limpiar el contenedor que muestra la url acortada
    setShortUrl("");

    await axios
      .post("", { url })
      .then(({ data, config }) => {
        //Almaceno la url que armo por la respuesta
        setShortUrl(`${config.baseURL}/${data.newUrlShort.codeShort}`);

        //Cambio el estado loading a false, porque ya se resolvio la promesa
        //y devolvio mi url acortada
        setLoading(false);
      })
      .catch((err) => {
        //Devuelvo una alerta de que no se logro acortar la url
        Toast('error', 'Nose se logro acortar la url', width);
        //Cambio el estado de loading, para que no se siga renderizando
        setLoading(false);
      });

    inputRef.current.value = "";
    return Toast("success", "La url se ha acortado correctamente", width);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          ref={inputRef}
          placeholder="http://example.com"
          className={styles.inputUrl}
        />
        <button>Acortar</button>
      </form>
    </>
  );
};

export default Form;
