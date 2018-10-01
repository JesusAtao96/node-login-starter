const jwt = require('jsonwebtoken');

// Verificar Token
let checkToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err) {
            return res.status(401).json({ 
                ok: false, 
                err: {
                    message: 'Invalid token'
                } 
            });
        }

        req.user = decoded.user;
        next();
    });
};

// Verifica AdminRole
let checkAdminRole = (req, res, next) => {
    let user = req.user;

    if(user.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({ 
            ok: false, 
            err: {
                message: 'This user is not an administrator'
            } 
        });
    }
};

// Verifica token para imagen
let checkTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err) {
            return res.status(401).json({ 
                ok: false, 
                err: {
                    message: 'Invalid token'
                } 
            });
        }

        req.user = decoded.user;
        next();
    });
};

module.exports = { checkToken, checkAdminRole, checkTokenImg };