import { useRef, useState } from "react";
import axios from "axios";

const Shortener = () => {
  const inputRef = useRef();
  const [textValidate, setTextValidate] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    const regexUrl =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const validateUrl = regexUrl.test(url);
    if (!validateUrl) {
      setTextValidate(url);
      return;
    }
    const urlShort = await axios.post(`http://localhost:3001`, {
        url,
    })
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
    </>
  );
};

export default Shortener;
