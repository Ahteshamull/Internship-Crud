import React from "react";
import { Link } from "react-router";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
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
            <tr>
              <th scope="row">1</th>
              <td>Test</td>
              <td>test@gmail.com</td>
              <td>Developer</td>
              <td>+121212</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button>
                <Link to={"/edit/id"}>
                  <button className="btn btn-primary">
                    <EditSquareIcon />
                  </button>
                </Link>
                <Link to={"/details/id"}>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Test</td>
              <td>test@gmail.com</td>
              <td>Developer</td>
              <td>+121212</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button>
                <Link to={"/edit/id"}>
                  <button className="btn btn-primary">
                    <EditSquareIcon />
                  </button>
                </Link>
                <Link to={"/details/id"}>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
