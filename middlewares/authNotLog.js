function authNotLog (req, res , next) {
    if (req.session.role) {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = authNotLog;