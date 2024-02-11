const auth = require("../middleware/auth")
const router = require("express").Router();

router.get('/all', auth, async (req, res) => {
    Todos.find(
        { userId: req.user }
    ).sort(
        { createAt: -1 }
    ).then((todo) => {
        res.json(todo)
    }).catch((err) => {
        console.log(err.message)
    })
} );
router.post("/", auth,  (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "title required"
        });
        return;
    }
    const todo = new Todos({
        title: req.body.title,
        description:req.body.description,
        userId: req.user
    });
    todo.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: "err.message" })
    })
});
router.put("/:id",  (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "upadat empty"
        })
    }

    const id = req.params.id;
    Todos.findByIdAndUpdate({ _id: id },
        { $set: { ...req.body } }, { new: true }).then(data => {
            if (!data) {
                res.status(401).send({
                    message: "cannot update the todo"
                })
            } else res.send({ message: "Todos updated successfully", todo: data })
        }).catch(err => {
            res.status(500).send({
                message: "Error in updataed id =" + id
            })
        })
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Todos.findByIdAndDelete({ _id: id }).then(data => {
        if (!data) {
            res.status(404).send({
                message: "con't delete "
            })
        } else {
            res.send({
                message: "deleted successfully"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
});

module.exports = router;