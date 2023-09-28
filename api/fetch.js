import axios from "axios";

//Set up base back end URL
let baseURL = "https://seal-app-lskga.ondigitalocean.app/nodeproject/api/v1/";
//let baseURL = "http://localhost:8000/api/v1/";

const makeRequest = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
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
