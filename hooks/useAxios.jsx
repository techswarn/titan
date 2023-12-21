import { useState, useEffect } from "react";
import axios from "axios";

//Set up base back end URL
//let baseURL = "http://127.0.0.1:3000/api/v1/";
let baseAppURL = "https://go-app-o4nsx.ondigitalocean.app/api/v1/";

const makeRequest = axios.create({
  baseURL: baseAppURL,
});

const useAxios = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [errorResponse, setErrorResponse] = useState(false);

  const fetchData = async (url, req) => {
    setLoading(true);
    let response;
    let error;

    try {
      response = await makeRequest({
        url: url,
        method: req.method,
        data: req,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: req?.token,
        },
      });

      setData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorResponse(err);
    }
  };

  return { data, loading, errorResponse, fetchData };
};

export default useAxios;
