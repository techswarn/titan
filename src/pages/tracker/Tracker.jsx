import { useState, useContext, useEffect } from "react";

import fetchData from "./../../../api/fetch";
import "./Tracker.css";
import {
  AuthContext,
  AuthDispatchContext,
} from "./../../../context/AuthContext";
import { useLocalStorage } from "./../../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "./../../../hooks/useCheckAuth";
export default function Tracker() {
  const [names, setNames] = useState({});

  const state = useContext(AuthContext);
  const [auth] = useLocalStorage("authIsReady");
  const navigate = useNavigate();
  const { checkAuth, loading, error } = useCheckAuth();

  useEffect(() => {
    checkAuth();
  }, []);
  useEffect(() => {
    if (!auth && !state.authIsReady) navigate("/login");
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const req = {
      method: "GET",
    };
    const res = await fetchData("/dbaccess/getquery", req);

    const data = res;
    setNames(data.response.data);
  };
  return (
    <div className="tracker-main">
      <h2 className="heading-center">Bugs & blogs</h2>

      <div className="heading-center">
        <form onSubmit={handleSubmit} className="">
          <div>
            <input className="single-field" type="text" name="" id="" />
          </div>
        </form>
        <div className="list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
