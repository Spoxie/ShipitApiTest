const axios = require("axios");
require("dotenv").config();
var crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const secret = process.env.API_SECRET;
const key = process.env.API_KEY;
const port = 8000;

function hashFunction(request) {
  hash = crypto.createHash("sha512");
  payload = JSON.stringify(request.body);
  hashdata = hash.update(payload + secret, "utf-8");
  gen_hash = hashdata.digest("hex");
  console.log("hash : " + gen_hash);
  return gen_hash;
}
//endpointti (endpointit)
app.post("/agents", (req, res) => {
  hashFunction(req);

  const headers = {
    "Content-Type": "application/json",
    "X-SHIPIT-KEY": key,
    "X-SHIPIT-CHECKSUM": gen_hash,
  };
  axios
    .post("https://apitest.shipit.ax/v1/agents", payload, {
      headers: headers,
    })
    .then((response) => {
      res.json(response.data);
    })

    .catch((error) => {
      console.log(error.response);
    });
});
app.post("/shipping-methods", (req, res) => {
  hashFunction(req);
  const headers = {
    "Content-Type": "application/json",
    "X-SHIPIT-KEY": key,
    "X-SHIPIT-CHECKSUM": gen_hash,
  };
  axios
    .post("https://apitest.shipit.ax/v1/shipping-methods", payload, {
      headers: headers,
    })
    .then((response) => {
      res.json(response.data);
    })

    .catch((error) => {
      console.log(error.response);
    });
});
app.put("/shipment", (req, res) => {
  hashFunction(req);
  const headers = {
    "Content-Type": "application/json",
    "X-SHIPIT-KEY": key,
    "X-SHIPIT-CHECKSUM": gen_hash,
  };
  axios
    .put("https://apitest.shipit.ax/v1/shipment", payload, {
      headers: headers,
    })
    .then((response) => {
      res.json(response.data);
    })

    .catch((error) => {
      console.log(error.response);
    });
});

app.get("/list-methods", (req, res) => {
  hashFunction(req);
  const headers = {
    "Content-Type": "application/json",
    "X-SHIPIT-KEY": key,
    "X-SHIPIT-CHECKSUM": gen_hash,
  };
  axios
    .get("https://apitest.shipit.ax/v1/list-methods", "[]")
    .then((response) => {
      res.json(response.data);
      console.log("tämä on response listasta:", response.data);
    })

    .catch((error) => {
      //tulee erroria, en tiedä miksi. Varmaan koska ei passaa tyhjää payloadia?
      //console.log(error.response);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
