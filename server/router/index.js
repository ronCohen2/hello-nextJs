const express = require("express");
const router = express.Router();
const axios = require("axios");

// router.get("/", async (req, res) => {
//   try {
//     const res1 = await axios.get("https://rickandmortyapi.com/api/character/");
//     const data = await res1.data;
//     return res.render(req, res, "/", { data });
//   } catch (error) {
//     return res.render(req, res, "/");
//   }
// });
module.exports = router;
