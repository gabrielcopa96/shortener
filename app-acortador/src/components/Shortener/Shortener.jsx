import { useRef, useState } from "react";
import axios from "axios";

// importacion de la funcion que realiza la validacion de la url
import validateUrl from "../../services/validateUrl";

// importacion del css module
import styles from "./css/shortener.module.css";

import Swal from "sweetalert2";


import Loading from "../Loading/Loading";
import Title from "../Title/Title";

const Shortener = () => {
  // hacemos referencia al tag input con la propiedad ref -> inputRef
  const inputRef = useRef();

  // creamos un estado local para almacenar la url acortada que nos devuelve la api
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    // funcion que nos valida que la url que se pasa es correcta
    const validate = validateUrl(url);

    if (url.length === 0) {
      return Toast.fire({
        icon: 'error',
        title: "No escribiste ninguna url",
      });
    }

    if (!validate) {
      inputRef.current.value = "";
      return Toast.fire({
        icon: 'info',
        title: "Url no valida",
      });
    }

    setLoading(true);
    setShortUrl("");

    await axios
      .post("", { url })
      .then(({ data, config }) => {
        console.log("mi data", data);
        setShortUrl(`${config.baseURL}/${data.newUrlShort.codeShort}`);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        Toast.fire({
          icon: "error",
          title: "No se logro acortar la url",
        });
      });

    inputRef.current.value = "";
    return Toast.fire({
      icon: "success",
      title: "La url se acorto exitosamente",
    });
  };

  return (
    <div className={styles.container__main}>
      <Title />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          ref={inputRef}
          placeholder="http://example.com"
          className={styles.inputUrl}
        />
        <button>Acortar</button>
      </form>
      <section className={styles.container__data}>
        {loading && <Loading />}
        {shortUrl && (
          <div className={styles.container__dataurl}>
            <p>Tu url acortada: </p>
            <a href={shortUrl} target="_blank">
              {shortUrl}
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shortener;
