import React from "react";
import { useEffect, useState } from "react";
import { database } from "./Firebase"; //
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

function FirebaseStorage() {
  const [user, setUser] = useState({ name: "", email: "" });

  const collectionRef = collection(database, "crud"); //

  const [id, setId] = useState("");

  async function handleSubmit(e) {
    console.log(id);
    e.preventDefault();
    if (id === "") {
      await addDoc(collectionRef, user);
      console.log("Form Submited");
      setUser({ name: "", email: "" });
    } else {
      const docRef = doc(database, "crud", id);
      updateDoc(docRef, user);
      setUser({ name: "", email: "" });
    }
  }

  /* Fetch Data from Firebase */
  const [data, setData] = useState([]);

  async function fetchData() {
    /* Method 1: using getDocs - data fetch from Firebase but refresh website required */
    /* const fetch = await getDocs(collectionRef);
    setData(
      fetch.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    ); */
    /* Method 2 : using onSnapshot - Recommended method */
    onSnapshot(collectionRef, (fetch) => {
      setData(
        fetch.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  /* Delete Data from Firebase*/
  function handleDelete(id) {
    const data = doc(database, "crud", id);
    deleteDoc(data);
  }

  /* Update date of Firebase */
  const [updateData, setUpdateData] = useState({});

  async function handleUpdate(id) {
    setId(id);
    const data = doc(database, "crud", id);
    const docData = await getDoc(data);
    // console.log(docData.data());
    setUpdateData(docData.data());
  }

  useEffect(() => {
    setUser({ name: updateData.name, email: updateData.email });
  }, [updateData]);
  return (
    <div style={{ margin: "30px" }}>
      <h2>Firebase CRUD</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "10px" }}>
          Name :
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          email :
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <input type="submit" style={{ marginTop: "20px" }} />
      </form>

      {/* Display Data from Firebase*/}
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>

        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default FirebaseStorage;
