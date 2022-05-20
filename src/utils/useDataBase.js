import { useState, useEffect } from "react";

const axios = require(`axios`);

const BASE_URL = `http://localhost:4444/api`;

const useDataBase = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  const addScore = (body) => {
    axios.post(BASE_URL + `/records`, body);
  };

  return { data, addScore };
};

export default useDataBase;
