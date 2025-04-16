import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function Home() {
  const [allUsersData, setAllUsersData] = useState([]);
  const allUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setAllUsersData(response.data.userData);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  allUsers()
},[])


  return (
    <div className="mt-5">
      <div className="container">
        <div className=" add_btn mb-3">
          <Link to={"/register"}>
            <button className="btn btn-primary">+Add Data</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {allUsersData.map((user, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.work}</td>
                <td>{user.mobile}</td>
                <td className="d-flex justify-content-between">
                  <Link to={"/details/id"}>
                  <button className="btn btn-success">
                    <RemoveRedEyeIcon />
                  </button>
                    

                  </Link>
                  <Link to={"/edit/id"}>
                    <button className="btn btn-primary">
                      <EditSquareIcon />
                    </button>
                  </Link>
                    <button className="btn btn-danger">
                      <DeleteIcon />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
