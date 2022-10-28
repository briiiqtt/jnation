const express = require('express');
const app = express();

const axios = require('axios');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/lunch-fetch', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  axios
    .get(
      `https://openapi.band.us/v2/band/posts?band_key=AABguEV2l94PCzyYbT-RyIXF&access_token=${process.env.ACCESS_TOKEN}`
    )
    .then((r) => {
      console.log(r.data);
      res.send(r.data);
    });
});

app.get('/lunch', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen((port = 59999), () => {
  console.log(`server started, port: ${port}`);
});
