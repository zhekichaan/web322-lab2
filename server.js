/********************************************************************************
 * WEB322 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Yevhen Chernytskyi Student ID: 166613232 Date: Mon Feb 3
 *
 ********************************************************************************/

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

app.get("/solutions/projects/id-demo", (req, res) => {
  const result = projectData
    .getProjectById(3)
    .then((data) => {
      res.send(data);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

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
