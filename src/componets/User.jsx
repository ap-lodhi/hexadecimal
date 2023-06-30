import React, { useEffect, useState } from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const User = () => {
  // https://jsonplaceholder.typicode.com/users

  const [data, setData] = useState([]);

  // const UserData =()=>{
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //      .then((res) => res.json())
  //    .then((res) => {
  //      setData(res);
  //    });
  // }

  const UserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  console.log(data);

  useEffect(() => {
    UserData();
  }, []);

  return (
    <>
      <h1 style={{textAlign:"center"}}>user data</h1>
      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
          border: "1px solid green",
        }}
      >
        <thead style={{ border: "1px solid red" }}>
          <tr>
            <th>id</th>

            <th>name.</th>
            <th>username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr
              key={el.id}
              style={{ border: "1px solid red", textAlign: "center" }}
            >
              <td style={{ border: "1px solid red", textAlign: "center" }}>
                {el.id}
              </td>

              <td style={{ border: "1px solid red", textAlign: "center" }}>
                {el.name}
              </td>
              <td style={{ border: "1px solid red", textAlign: "center" }}>
                {el.username}
              </td>
              <td style={{ border: "1px solid red", textAlign: "center" }}>
                {el.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {data.map((ele) => (
        <p>{ele.name}</p>
      ))} */}
    </>
  );
};
