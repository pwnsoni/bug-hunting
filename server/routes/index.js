const issue = require('./issue');
const projects = require('./project');
const user = require('./user');

module.exports = (router) => {
    issue(router);
    projects(router);
    user(router);
    return router;
};