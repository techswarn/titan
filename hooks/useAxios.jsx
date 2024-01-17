import { useState, useEffect } from "react";
import axios from "axios";
import fetchData from "../api/fetch";

//Set up base back end URL
//let baseURL = "http://127.0.0.1:3000/api/v1/";
let baseAppURL = "https://apps.techenv.dev/backend/api/v1/";

const makeRequest = axios.create({
  baseURL: baseAppURL,
});

const useAxios = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  const fetch = async (url, body) => {
    setLoading(true);
    let response;
    let error;

    try {
      const req = {
        method: body.method,
        payload: body.payload,
      };
      const res = await fetchData(url, req);
      console.log(res.response.data.Data);

      setData(res.response.data.Data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorResponse(err);
    }
  };

  return { data, loading, errorResponse, fetch };
};

export default useAxios;
