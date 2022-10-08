import { useState } from "react";

// importacion del css module
import styles from "./css/shortener.module.css";

// import Loading from "../../components/Loading/Loading";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Dataurl from "../../components/Dataurl/Dataurl";

const Shortener = () => {
  // creamos un estado local para almacenar la url acortada que nos devuelve la api
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.container__main}>
      <Title />
      <Form setLoading={setLoading} setShortUrl={setShortUrl} />
      <Dataurl shortUrl={shortUrl} loading={loading} />
    </div>
  );
};

export default Shortener;
