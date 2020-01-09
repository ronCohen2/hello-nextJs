const express = require("express");
const next = require("next");
const axios = require("axios");
const dev = process.env.NODE.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const apiRouter = require("./router/index");
    server.use("/", apiRouter);

    server.get("/", async (req, res) => {
      try {
        const res1 = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        const data = await res1.data;
        return app.render(req, res, "/", { data: data });
      } catch (error) {
        return app.render(req, res, "/");
      }
    });

    server.get("/Search/:name", async (req, res) => {
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

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log("Server run on port 3000");
    });
  })
  .catch(ex => {
    console.log(ex.stack);
  });
