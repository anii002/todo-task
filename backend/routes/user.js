const router = require("express").Router;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user.model');


router.post("/signup", async (req, res) => {
    try {
        let { fullname, fathername, email, phonenumber, password } = req.body;

        if (!fullname || !fathername || !email || !phonenumber || !password) 
            return res.status(401).json({ msg: "all feilds are required" })
        

        if (password.length < 5) 
            return res.status(401).json({ msg: "password must be 5 character" })
        

        const existingUser = await User.findOne({ email: email })
        if (existingUser) return res.status(400).json({ msg: "email already exists" })


        const salt = await bcrypt.genSalt();
        const PasswordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullname,
            fathername,
            email,
            phonenumber,
            password: PasswordHash
        });
        const savedUser = await newUser.save();
        res.json("successfully registered")

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})


router.post("/login", async (req, res) => {
    try {
        const { email, phonenumber, password } = req.body;

        if (!email || !phonenumber || !password) 
            return res.status(401).json({ msg: "not all feilds have been entered" })
        

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "invalid credentials" })
        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET)
        res.json({
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
            }
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user)
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user)
        res.json({
            fullname: user.fullname,
            id: user._id
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

module.exports = router;
