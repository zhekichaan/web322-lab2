const projectData = require("../data/projectData");
const sectorData = require("../data/sectorData");

let projects = [];

const initialize = () => {
  return new Promise((resolve, reject) => {
    projectData.map((project) => {
      project.sector = sectorData.find(
        (element) => element.id == project.sector_id
      ).sector_name;
      projects.push(project);
    });
    resolve();
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    resolve(projects);
  });
};

const getProjectById = (projectID) => {
  const result = projects.find((project) => project.id == projectID);

  return new Promise((resolve, reject) => {
    if (result) resolve(projects);
    else reject(`Unable to find a project with id: ${projectID}.`);
  });
};

const getProjectsBySector = (sector) => {
  const result = projects.filter((project) =>
    project.sector.toLowerCase().includes(sector.toLowerCase())
  );

  return new Promise((resolve, reject) => {
    if (result) resolve(projects);
    else reject(`Unable to find a project with sector: ${sector}.`);
  });
};

initialize();

// getAllProjects().then((data) => {
//   console.log(data);
// });

// getProjectById(100)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// console.log("Get projects by sector: ");
// console.log(getProjectsBySector("sinks"));

module.exports = {
  initialize,
  getAllProjects,
  getProjectById,
  getProjectsBySector,
};
