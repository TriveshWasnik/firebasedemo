import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  async function loginHandler() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      res && navigate("/user");
    } catch (error) {
      console.log(error);
    }
  }

  async function loginGoogleHandler() {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      res && navigate("/user");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ margin: "80px" }}>
      <h2>User Login</h2>
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
      <button onClick={loginHandler}>Login</button>
      <div>
        <Link to="/register">Register New User</Link>
      </div>

      <button onClick={loginGoogleHandler}>Login with Google</button>
    </div>
  );
}

export default Login;
