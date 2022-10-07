import { useRef, useState } from "react";
import axios from "axios";

const Shortener = () => {
  const inputRef = useRef();
  const [textValidate, setTextValidate] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    const regexUrl = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    const validateUrl = regexUrl.test(url);
    if (!validateUrl) {
      setTextValidate(url);
      return;
    }
    const urlShort = await axios.post(``, {
        url,
    })
    setShortUrl(`${urlShort.config.baseURL}/${urlShort.data.data.codeShort}`);
    console.log(urlShort);
  };

  return (
    <>
      <form>
        <h2>Escriba la url a acortar:</h2>
        <input type="text" ref={inputRef} placeholder="http://example.com" />
        <button>Acortar</button>
      </form>
      <button onClick={handleSubmit}>validacion</button>
      <p>{textValidate}</p>
      <p>este es tu link: <a href={shortUrl}>{shortUrl}</a></p>
    </>
  );
};

export default Shortener;
