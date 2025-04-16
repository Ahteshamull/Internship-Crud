import React, { useEffect, useState } from "react";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { CardContent } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Link, useParams } from "react-router";
import axios from "axios";

export default function Details() {
  const {id } = useParams();
  const [singleUserData, setSingleUsersData] = useState([]);
  const singleUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/single/user/${id}`);
      setSingleUsersData(response.data.userData);
    } catch (error) {
      console.log(error);
    }
  };
console.log(singleUserData)
  useEffect(() => {
    singleUsers();
  }, []);

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>
        Welcome <span className="text-primary">{singleUserData.name}</span>
      </h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn ">
            <Link to={`edit/${singleUserData._id}`}>
              <button className="btn btn-primary mx-2">
                <EditSquareIcon />
              </button>
            </Link>
            <Link to={"/details/id"}>
              <button className="btn btn-danger">
                <DeleteIcon />
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                src="/profileImage.png"
                style={{ width: 50 }}
                alt="ProfileImage"
              />
              <h3 className="mt-3">
                Name:-{" "}
                <span style={{ fontWeight: 400 }}>{singleUserData.name}</span>
              </h3>
              <h3 className="mt-3">
                Age:-{" "}
                <span style={{ fontWeight: 400 }}>{singleUserData.age}</span>
              </h3>
              <p>
                <MailOutlineIcon />
                Email:-{" "}
                <span style={{ fontWeight: 400 }}>{singleUserData.email}</span>
              </p>
              <p>
                <WorkIcon />
                Occupation:-{" "}
                <span style={{ fontWeight: 400 }}>{singleUserData.work}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <StayCurrentPortraitIcon />
                Mobile:-{" "}
                <span style={{ fontWeight: 400 }}>{singleUserData.mobile}</span>
              </p>
              <p className="mt-3">
                <LocationPinIcon />
                Address:-{" "}
                <span style={{ fontWeight: 400 }}>
                  {singleUserData.address}
                </span>
              </p>
              <p className="mt-3">
                Description:-{" "}
                <span style={{ fontWeight: 400 }}>
                  {singleUserData.description}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
