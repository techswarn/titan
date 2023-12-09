import { useState, useEffect } from "react";
import axios from "axios";

//Set up base back end URL
let baseURL = "https://seal-app-lskga.ondigitalocean.app/nodeproject/api/v1/";
let funcURL =
  "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0b0f94ea-326e-434f-a6db-e297bf02f150/dbaccess/getquery";
//let baseURL = "http://localhost:8000/api/v1/";

const makeRequest = axios.create({
  baseURL: funcURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxios = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [errorResponse, setErrorResponse] = useState(false);

  const fetchData = async (url, req) => {
    setLoading(true);
    try {
      const response = await makeRequest({
        url: url,
        method: req.method,
        data: req,
      });

      setData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorResponse(err);
    }
  };
  console.log(data);
  return { data, loading, errorResponse, fetchData };
};

export default useAxios;
