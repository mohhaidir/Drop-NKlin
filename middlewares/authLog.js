function authLog (req, res, next) {
    if (req.session.role) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = authLog;