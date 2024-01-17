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

import Blog from "./Blog";
import "./Tracker.css";

export default function Tracker() {
  const [search, setSearch] = useState({});
  const [modelIsOpen, SetModelIsOpen] = useState(false);
  console.log(modelIsOpen);
  const [blogs, setBlogs] = useState();
  const { data, loading, fetch } = useAxios();
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
    getBlog();
    setBlogs(data);
  }, [search]);

  const openModel = () => {
    SetModelIsOpen(true);
  };

  const getBlog = async () => {
    const req = {
      method: "POST",
      payload: {
        keyword: search,
        tag: "node",
      },
    };
    fetch("/blog", req);
  };

  const Model = () => {
    const [subject, setSubject] = useState();
    const [para, setPara] = useState();
    console.log("loading" + loading);
    const closeModal = () => {
      SetModelIsOpen(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const req = {
        method: "POST",
        payload: {
          subject: subject,
          paragraph: para,
        },
      };
      fetch("/blogs", req);
    };
    return (
      <>
        <div className="model">
          <div className="flex-row">
            <h3>Add blogs</h3>
            <button className="btn" onClick={closeModal}>
              x
            </button>
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <label>
                <span>Subject:</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </label>
              <label>
                <span>Details:</span>
                <textarea
                  required
                  type="textarea"
                  onChange={(e) => setPara(e.target.value)}
                />
              </label>
              <button className={"btn"}>Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {!auth && !state.authIsReady ? (
        <></>
      ) : (
        <div className="tracker-main">
          <h2 className="heading-center">Bugs & blogs</h2>

          <button onClick={openModel} className="btn">
            Add
          </button>
          {modelIsOpen ? <Model /> : ""}
          <div className={modelIsOpen ? "area" : "flex-column"}>
            <div className="">
              <form className="">
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
              <Blog blogs={blogs} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
