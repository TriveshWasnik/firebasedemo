import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const auth = getAuth();
  const navigate = useNavigate();

  async function logoutHandler() {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ margin: "80px" }}>
      <h3>User Profile</h3>
      <div>Name : {auth.currentUser.displayName}</div>
      <div>Email : {auth.currentUser.email}</div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default UserProfile;
