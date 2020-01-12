const express = require("express");
const router = express.Router();
const axios = require("axios");
const next = require("next");
const dev = process.env.NODE.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("../db");
app.prepare().then();

router.get("/", (req, res) => {
  db.getDB()
    .collection("rick")
    .find({})
    .toArray((err, documents) => {
      if (err) console.log(err);
      else {
        res.status(200).send(documents);
      }
    });
});
router.post("/", async (req, res) => {
  const { name, status, gender, img } = req.body;
  try {
    const add = await db
      .getDB()
      .collection("rick")
      .insertOne({ name, status, gender, img });
    return res.status(200).send(`Success id:${add.insertedId}`);
  } catch (error) {
    return res.status(400).send("Failed");
  }
});
router.delete("/:id", async (req, res) => {
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
router.post("/edit", async (req, res) => {
  const { name, gender, status, img, id } = req.body;
  const EditCharacter = await db
    .getDB()
    .collection("rick")
    .updateOne(
      { _id: db.getPrimaryKey(id) },
      {
        $set: {
          name,
          gender,
          status,
          img
        }
      }
    );
  const { n } = EditCharacter.result;
  if (n > 0) {
    return res.status(200).send("Update Success");
  } else return res.status(200).send("Update Failed");
});
module.exports = router;
