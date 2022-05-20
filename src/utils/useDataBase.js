import { useState, useEffect } from "React";

const axios = require(`axios`);

const BASE_URL = `https://localhost:4444/api`;

const useDataBase = async (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(BASE_URL + url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  console.log(data);
};

export default useDataBase;
