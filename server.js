const projectData = require("./modules/projects");

projectData.initialize();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send("Assignment 2: Yevhen Chernytskyi - 166613232")
);
app.get("/solutions/projects", (req, res) =>
  res.send(
    projectData.getAllProjects().then((data) => {
      return data;
    })
  )
);
app.get("/solutions/projects/id-demo", (req, res) =>
  res.send(
    projectData
      .getProjectById(9)
      .then((data) => {
        return data;
      })
      .catch((reason) => {
        return reason;
      })
  )
);
app.get("/solutions/projects/sector-demo", (req, res) =>
  res.send(
    projectData
      .getProjectsBySector("transp")
      .then((data) => {
        return data;
      })
      .catch((reason) => {
        return reason;
      })
  )
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
