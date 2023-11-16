const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token")
        if (!token)
            return res.status(401).json({
            msg: "no authentication token  accress denied"
        });
        const varified = jwt.verify(token, process.env.JWT_SECRET);
        if (!varified)
            return res.status(401).json({ msg: "token varifiction failed " });

        req.user = varified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = auth;