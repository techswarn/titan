import axios from "axios";

//Set up base back end URL
let baseURL = "https://seal-app-lskga.ondigitalocean.app/nodeproject/api/v1/";
//let baseURL = "http://localhost:8000/api/v1/";
let funcURL =
  "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0b0f94ea-326e-434f-a6db-e297bf02f150";

const makeRequest = axios.create({
  baseURL: funcURL,
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
