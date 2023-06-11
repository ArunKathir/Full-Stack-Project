const router = require('express').Router();

// Get the Controller instance
const UserDBControllerss = require('../controllers/UserDBControllers');

// Routes (RESTful routes)
router.get("/showAllUser", UserDBControllerss.showAllUser);

router.post("/showUser", UserDBControllerss.showUser);

router.post("/addUser", UserDBControllerss.addUser);

router.put("/updateUser", UserDBControllerss.updateUser);

router.delete("/deleteUser", UserDBControllerss.deleteUser);

module.exports = router;