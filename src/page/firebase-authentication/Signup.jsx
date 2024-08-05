import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

function Signup() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  async function registerHandler() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      res && navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <h2>User Register</h2>
      <div>
        Email :{" "}
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        Password :{" "}
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button onClick={registerHandler}>Signup</button>
      <Link to="/">
        <p>
          {" "}
          Already create Account : <b>Login</b>
        </p>{" "}
      </Link>
    </div>
  );
}

export default Signup;
