const Issue = require('./../models/issue')
const {dbUtil} = require('./../db');

const getAllIssues = async (req, res) => {
    console.log(`Hellow from ${req.path}`)
    let status = 200;
    let result = {status: status}

    try {
        await dbUtil.connect();
        const issues = await Issue.find({});
        result.status = status;
        result.result = issues;
    } catch (error) {
        console.log(error)
        result.status = 500;
        result.error = error;
    }

    res.status(status).send(result);
}

const getThisIssue = async (req, res) => {
    console.log(`Hellow from ${req.params.issue_id}`)
    let status = 200;
    let result = {status: status}
    const issueId = req.params.issue_id;

    try {
        await dbUtil.connect();
        const issue = await Issue.findOne({issueId});
        result.status = status;
        result.result = issue;
    } catch (error) {
        console.log(error)
        result.status = 500;
        result.error = error;
    }

    res.status(status).send(result);
}

const createIssue = async (req, res) => {
    console.log(`Hellow from ${req.path}`)
    const {issueId, title, reporter, projectId, description} = req.body;
    const temp = {issueId, title, reporter, projectId, description, createdAt: new Date(), updatedAt: new Date()} 
    console.log(temp)
    const issue = new Issue(temp);
    let result = {status: 200}
    try {
        await dbUtil.connect();
        let x = await issue.save();
        result.result = x;
    } catch (error) {
        result.status = 500;
        result.error = error;
    }

    res.status(result.status).send(result);
}

const updateIssue = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

const deleteIssue = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

module.exports = {getAllIssues, getThisIssue, createIssue, updateIssue, deleteIssue}
