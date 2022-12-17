import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import styles from "../CSS/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [apiData, setApiData] = useState();
  const [data, setData] = useState(false);

  const navigate = useNavigate();

  const getData = () => {
    axios("https://randomuser.me/api/?results=50").then((res) =>
      setApiData(res.data.results)
    );
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(apiData);
  const handlefetch = () => {
    axios
      .post("http://localhost:8080/data/datapost", { results: apiData })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData(true);
  };

  const handleDelete = () => {
    axios
      .delete("http://localhost:8080/data/delete")
      .then((res) => console.log(res))
      .catch((err) => console.log("Error in Deleting"));
    setData(false);
  };
  const handleUserDetail = () => {
    navigate("/userdetailpage");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <div className={styles.btndiv}>
        <Button onClick={handlefetch} colorScheme="teal" variant="outline">
          Fetch Users
        </Button>
        <Button onClick={handleDelete} colorScheme="teal" variant="outline">
          Delete Users
        </Button>
        <Button onClick={handleUserDetail} colorScheme="teal" variant="outline">
          User Details
        </Button>
      </div>
      <div className={styles.mydiv}>
        {data ? (
          <table>
            <tr>
              <th>Gender</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone No.</th>
              <th>City</th>
              <th>Country</th>
            </tr>
            {apiData.map((el) => {
              return (
                <tr key={el.id.value}>
                  <td>{el.gender}</td>
                  <td>{el.name.first + " " + el.name.last}</td>
                  <td>{el.dob.age}</td>
                  <td>{el.phone}</td>
                  <td>{el.location.city}</td>
                  <td>{el.location.country}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h1>Data Div</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
