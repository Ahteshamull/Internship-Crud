import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../Toast";

export default function Edit() {
  const navigate = useNavigate(); 
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    email: "",
    work: "",
    mobile: "",
    age: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const singleUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/single/user/${id}`
      );
      setData(response.data.userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleUsers();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:8000/update/user/${id}`,
        data
      );
      if (res.status === 200) {
        handleSuccess("User Updated Successfully")
        setTimeout(() => {
          
          navigate("/")
        },[2000])
      }
      console.log("Updated successfully:", res.data)
    } catch (err) {
      console.log("Update failed:", err);
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-primary mt-3 d-block" >
          Edit Your Data
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Name</label>
              <input
                onChange={handleChange}
                value={data.name}
                required
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Email</label>
              <input
                onChange={handleChange}
                value={data.email}
                type="email"
                required
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Work</label>
              <input
                onChange={handleChange}
                value={data.work}
                required
                type="text"
                name="work"
                className="form-control"
                placeholder="Enter Your Work"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Mobile</label>
              <input
                onChange={handleChange}
                value={data.mobile}
                type="text"
                required
                name="mobile"
                className="form-control"
                placeholder="Enter Your Mobile"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Age</label>
              <input
                onChange={handleChange}
                value={data.age}
                type="text"
                required
                name="age"
                className="form-control"
                placeholder="Enter Your Age"
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Address</label>
              <input
                onChange={handleChange}
                value={data.address}
                type="text"
                required
                name="address"
                className="form-control"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Description</label>
              <textarea
                onChange={handleChange}
                required
                name="description"
                value={data.description}
                className="form-control"
                placeholder="Enter Your Description"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
}
