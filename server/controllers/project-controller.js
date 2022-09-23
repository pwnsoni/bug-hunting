const Project = require('./../models/project')
const {dbUtil} = require('./../db');


const getAllProjects = async (req, res) => {
    console.log(`Hellow from ${req.path}`)
    let status = 200;
    let result = {status: status}

    try {
        await dbUtil.connect();
        const projects = await Project.find({});
        result.status = status;
        result.result = projects;
    } catch (error) {
        result.status = 500;
        result.error = e;
    }

    res.status(status).send(result);
}

const getThisProject = async (req, res) => {
    console.log(`Hellow from ${req.params.project_id}`)
    let status = 200;
    let result = {status: status}
    const projectId = req.params.project_id;

    try {
        await dbUtil.connect();
        const project = await Project.findOne({projectId});
        result.status = status;
        result.result = project;
    } catch (error) {
        result.status = 500;
        result.error = e;
    }

    res.status(status).send(result);
}

const createProject = async (req, res) => {
    console.log(`Hellow from ${req.path}`)
    const {projectName, projectId, description} = req.body;
    const temp = {projectName, projectId, description, issuesCounter: 0, createdAt: new Date(), updatedAt: new Date()} 
    console.log(temp)
    const project = new Project(temp);
    let result = {status: 200}
    try {
        await dbUtil.connect();
        await project.save();
        result.result = temp;
    } catch (error) {
        result.status = 500;
        result.error = error;
    }

    res.status(result.status).send(result);
}

const updateProject = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

const deleteProject = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

module.exports = {getAllProjects, createProject, updateProject, deleteProject, getThisProject}
