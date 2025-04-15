import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    work: "",
    mobile: "",
    age: "",
    address: "",
   description:""
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   try {
     const response = await axios.post("http://localhost:8000/register", data, {
       method: "POST",
      
       
     });

     const result = await res.json();
     console.log(result);
   } catch (error) {
    console.log(error.response.massage)
   }

  }

  return (
    <div>
      <div className="container">
        <Link className="text-primary mt-3" to={"/"}>
          Home
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Work
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mobile
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Age
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description
              </label>
              <textarea
                onChange={handleChange}
                type="text"
                required
                name="description"
                value={data.description}
                className="form-control"
                placeholder="Enter Your Description"
              />
            </div>

            <button  className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
