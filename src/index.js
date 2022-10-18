const express = require("express");

const app = express();

app.use(express.json())

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json([
    "Rocketseat Frontend",
    "Rocketseat Backend",
    "Rocketseat Mobile",
  ]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json([
    "Rocketseat Frontend",
    "Rocketseat Backend",
    "Rocketseat Mobile",
    "Rocketseat Figma",
  ]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([
    "Rocketseat Explorer",
    "Rocketseat Backend",
    "Rocketseat Mobile",
    "Rocketseat Figma",
  ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Rocketseat Explorer",
    "Rocketseat Backend",
    "Rocketseat Swift",
    "Rocketseat Figma",
  ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Rocketseat Explorer",
    "Rocketseat Swift",
    "Rocketseat Figma",
  ]);
});

app.listen(3000);
