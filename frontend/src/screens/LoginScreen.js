import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: name,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      if (localStorage.userInfo) {
        navigate("/");
      }
    } catch (error) {
      setError("Invalid Login");
    }
  };

  return (
    <div>
      {error ? <p>{error}</p> : ""}

      <form onSubmit={submitHandler}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
