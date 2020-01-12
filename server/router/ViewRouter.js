const express = require("express");
const router = express.Router();
const axios = require("axios");
const next = require("next");
const dev = process.env.NODE.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("../db");
app.prepare().then();

router.get("/", async (req, res) => {
  try {
    const res1 = await axios.get("https://rickandmortyapi.com/api/character/");
    const data = await res1.data;
    return app.render(req, res, "/", { data: data });
  } catch (error) {
    return app.render(req, res, "/");
  }
});

router.get("/Search/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const res1 = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = await res1.data;
    return app.render(req, res, `/Search/${name}`, { data: data.results });
  } catch (error) {
    return app.render(req, res, `/Search/${name}`);
  }
});

module.exports = router;
