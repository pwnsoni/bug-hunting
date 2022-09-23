const projectController = require('./../controllers/project-controller')

module.exports = (router) => {
    router.route('/projects')
        .get(projectController.getAllProjects);

    router.route('/project')
        .post(projectController.createProject)
        .put(projectController.updateProject)
        .delete(projectController.deleteProject)

    router.route('/projects/:project_id')
        .get(projectController.getThisProject)
};