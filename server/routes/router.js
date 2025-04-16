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

module.exports = router;
