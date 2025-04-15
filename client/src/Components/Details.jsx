import React from "react";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { CardContent } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Link } from 'react-router';

export default function Details() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>
        Welcome <span>Details</span>
      </h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn ">
            <Link to={"/edit/id"}>
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
                Name:- <span style={{ fontWeight: 400 }}>Hasan</span>
              </h3>
              <h3 className="mt-3">
                Age:- <span style={{ fontWeight: 400 }}>21</span>
              </h3>
              <p>
                <MailOutlineIcon />
                Email:-{" "}
                <span style={{ fontWeight: 400 }}>hasan@.gmail.com</span>
              </p>
              <p>
                <WorkIcon />
                Occupation:-{" "}
                <span style={{ fontWeight: 400 }}>Web Developer</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <StayCurrentPortraitIcon />
                Mobile:- <span style={{ fontWeight: 400 }}>+121212</span>
              </p>
              <p className="mt-3">
                <LocationPinIcon />
                Address:- <span style={{ fontWeight: 400 }}>21</span>
              </p>
              <p className="mt-3">
                Description:-{" "}
                <span style={{ fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  voluptas placeat cumque facilis minima perferendis ducimus in
                  voluptatum libero minus necessitatibus nemo impedit, neque
                  soluta quo ad blanditiis omnis eos!
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
