const projectData = require("./modules/projects");

projectData.initialize();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send("Assignment 2: Yevhen Chernytskyi - 166613232")
);
app.get("/solutions/projects", (req, res) =>
  projectData.getAllProjects().then((data) => {
    res.send(data);
  })
);
app.get("/solutions/projects/id-demo", (req, res) =>
  projectData
    .getProjectById(9)
    .then((data) => {
      res.send(data);
    })
    .catch((reason) => {
      res.send(reason);
    })
);
app.get("/solutions/projects/sector-demo", (req, res) =>
  projectData
    .getProjectsBySector("transp")
    .then((data) => {
      res.send(data);
    })
    .catch((reason) => {
      res.send(reason);
    })
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
