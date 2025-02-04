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

const projectData = require("./modules/projects"); // import functions

projectData.initialize(); // initialize object

const express = require("express"); // import express package
const app = express(); // create express application
const port = 3000; // set port to 3000

app.get(
  "/",
  (req, res) => res.send("Assignment 2: Yevhen Chernytskyi - 166613232") // send message on "/" route
);

app.get("/solutions/projects", (req, res) =>
  projectData.getAllProjects().then((data) => {
    res.send(data); // send data of all projects
  })
);

app.get("/solutions/projects/id-demo", (req, res) => {
  projectData
    .getProjectById(3)
    .then((data) => {
      res.send(data); // if projects with this id exists then data sends to the user
    })
    .catch((reason) => {
      res.send(reason); // if there is no project with this id, error message sends to the user
    });
});

app.get("/solutions/projects/sector-demo", (req, res) =>
  projectData
    .getProjectsBySector("transp")
    .then((data) => {
      res.send(data); // if at least one project includes this sector (or its part) then data sends
    })
    .catch((reason) => {
      res.send(reason); // if there is no project with this sector, error message returns
    })
);

// listen for connections
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
