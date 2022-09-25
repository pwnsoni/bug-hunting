const userController = require('./../controllers/user-controller');

module.exports = (router) => {
    router.route('/login')
        .post(userController.login);

    router.route('/logout')
        .get(userController.logOut);

    router.route('/getCurrentUser')
        .get(userController.getCurrentUser);
};