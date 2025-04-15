import React from "react";

export default function Home() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className=" add_btn mt-5">
          <button className="btn btn-primary">Add Data</button>
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
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
