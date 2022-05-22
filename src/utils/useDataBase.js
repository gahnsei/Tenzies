import { useState, useEffect } from "react";

const axios = require(`axios`);

const BASE_URL = `/api`;

const useDataBase = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL + url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [url]);

  const addScore = (body) => {
    axios.post(BASE_URL + `/records`, body);
  };

  return { data, addScore, loading };
};

export default useDataBase;
