const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employees.js');
const menusRouter = require('./menus.js');

apiRouter.use('/menus', menusRouter);
apiRouter.use('/employees', employeesRouter);

module.exports = apiRouter;