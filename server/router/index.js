const express = require("express");
const router = express.Router();
const axios = require("axios");
const next = require("next");
const dev = process.env.NODE.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("../db");
app.prepare().then();

router.get("/get", (req, res) => {
  db.getDB()
    .collection("rick")
    .find({})
    .toArray((err, documents) => {
      if (err) console.log(err);
      else {
        res.json(documents);
      }
    });
});
router.post("/add", async (req, res) => {
  const { name, status, gender, img } = req.body;
  console.log(name, status, gender, img);
  try {
    const add = await db
      .getDB()
      .collection("rick")
      .insertOne({ name: "ron" });
    return res.status(200).send(`Success id:${add.insertedId}`);
  } catch (error) {
    return res.status(400).send("Failed");
  }
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const DeleteCharacter = await db
    .getDB()
    .collection("rick")
    .findOneAndDelete({ _id: db.getPrimaryKey(id) });
  if (DeleteCharacter.value) {
    return res.send("secess");
  } else {
    return res.send("faild");
  }
});
router.put("/edit/:id", (req, res) => {});

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
