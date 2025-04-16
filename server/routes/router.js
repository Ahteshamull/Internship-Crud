const express = require("express");
const crudModels = require("../models/crudModels");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, work, mobile, age, address, description } = req.body;
  if (!name || !email || !work || !mobile || !age || !address) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const user = await crudModels.findOne({ email: email });
    if (user) {
      return res.status(422).json({ error: "User already exists" });
    } else {
      const userData = new crudModels({
        name,
        email,
        work,
        mobile,
        age,
        address,
        description,
      });
      await userData.save();
      return res
        .status(201)
        .json({ message: "User Registered Successfully",success:true, userData });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to register user" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const userData = await crudModels.find();
    return res.status(200).json({ userData });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
});

router.get("/single/user/:id", async (req, res) => {
  try {
    const userData = await crudModels.findById(req.params.id);
    return res.status(200).json({ userData });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch user" });
  }
});
router.patch("/update/user/:id", async (req, res) => {
  try {
    const userData = await crudModels.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ message:"User Updated Successfully",userData });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update user" });
  }
});
router.delete("/delete/user/:id", async (req, res) => {
  try {
    const userData = await crudModels.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message:"User Deleted Successfully",userData });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
