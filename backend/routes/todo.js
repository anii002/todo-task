const todoval = require("../controller/todoval.controller")
const auth = require("../middleware/auth")

const router = require("express").Router();

router.get('/all', auth, todoval.getAll);
router.post("/", auth, todoval.create);
router.put("/:id", todoval.update);
router.delete("/:id", todoval.delete);

module.exports = router;