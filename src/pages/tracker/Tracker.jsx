import { useState, useContext, useEffect } from "react";
import {
  AuthContext,
  AuthDispatchContext,
} from "./../../../context/AuthContext";
import { useLocalStorage } from "./../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "./../../../hooks/useCheckAuth";
import useAxios from "../../../hooks/useAxios";
import fetchData from "./../../../api/fetch";
import "./Tracker.css";

import Blog from "./Blog";

export default function Tracker() {
  const [search, setSearch] = useState({});
  // const { data, loading, fetchData } = useAxios();
  const state = useContext(AuthContext);
  const [auth] = useLocalStorage("authIsReady");
  const navigate = useNavigate();
  const { checkAuth, error } = useCheckAuth();

  useEffect(() => {
    checkAuth();
  }, []);
  useEffect(() => {
    if (!auth && !state.authIsReady) navigate("/login");
  }, [state]);

  useEffect(() => {
    handleSubmit();
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = {
      method: "POST",
      payload: {
        keyword: search,
        tag: "node",
      },
    };
    const res = await fetchData("/getBlogs", req);
    console.log(res);
  };

  return (
    <>
      {!auth && !state.authIsReady ? (
        <></>
      ) : (
        <div className="tracker-main">
          <h2 className="heading-center">Bugs & blogs</h2>

          <div className="heading-center">
            <form onSubmit={handleSubmit} className="">
              <div>
                <input
                  className="single-field"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="list">
            <Blog />
          </div>
        </div>
      )}
    </>
  );
}
