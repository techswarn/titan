import axios from "axios";

//Set up base back end URL
let baseURL = "http://127.0.0.1:3000/api/v1/";

const makeRequest = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const fetchData = async (url, req) => {
  let response;
  let error;
  try {
    response = await makeRequest({
      url: url,
      method: req.method,
      data: req,
    });
  } catch (err) {
    error = err;
    //    console.log(err);
  }

  return { response, error };
};

export default fetchData;
