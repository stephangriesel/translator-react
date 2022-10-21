const fs = require("fs/promises");
const cors = require("cors");
const { application } = require("express");
const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.get(`/languages`, async function (req, res) {
  const url = "https://libretranslate.com/languages";
  const options = {
    method: "GET",
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error("error:" + err));
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
});

app.listen(8888, () => console.log("API is running"));
