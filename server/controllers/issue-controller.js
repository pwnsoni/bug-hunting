const getAllIssues = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

const getThisIssue = async (req, res) => {
    res.send(`Hellow from ${req.params.issue_id}`)
}

const createIssue = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

const updateIssue = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

const deleteIssue = async (req, res) => {
    res.send(`Hellow from ${req.path}`)
}

module.exports = {getAllIssues, getThisIssue, createIssue, updateIssue, deleteIssue}
