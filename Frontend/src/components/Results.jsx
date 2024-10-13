import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Results = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setData(res.data);
  //   } catch (error) {
  //     setError("Error fetching data", error);
  //   }
  // };

  const addUser = async () => {
    event.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/addUser", {
        title,
        body,
      });
      console.log("User Added", res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log('Component mounted or updated');
  
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Replace dependencies with relevant state/props
  

  // useEffect(() => {
  //   // fetchData();
  //   addUser();
  // }, []);

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Results;
