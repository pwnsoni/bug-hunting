const issueController = require('./../controllers/issue-controller')

module.exports = (router) => {
    router.route('/allIssues')
        .get(issueController.getAllIssues);

    router.route('/issue')
        .post(issueController.createIssue)
        .put(issueController.updateIssue)
        .delete(issueController.deleteIssue)

    router.route('/issues/:issue_id')
        .get(issueController.getThisIssue)
};