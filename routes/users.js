var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *      description: Get all users. Not yet implemented.
 *      responses:
 *          200:
 *              description: Users of this application. Placeholder string for now.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @swagger
 * /users:
 *  post:
 *      description: Create new user
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - username
 *              properties:
 *                  username:
 *                      type: string
 *                  age:
 *                      type: number
 *      responses:
 *          201:
 *              description: User created
 */
router.post("/", function(req, res, next) {
  var userData = req.body;
  // TODO: Add user data to a database.
  res.status(201).json(userData);
});

/**
 * @swagger
 * /users/{userId}:
 *  delete:
 *      description: Delete user
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of user to delete
 *      responses:
 *          200:
 *              description: User that was deleted
 */
router.delete('/:id', function(req, res, next) {
  var { id } = req.params;
  // TODO: Delete user with given id
  return res.json({userId: id});
});
module.exports = router;
