const protect = (req, res, next) => {
    if (!req.session.authenticated) {
        res.status(401).json({message: 'Unauthorized access'})
        throw new Error('Unauthorized access.')
    }
    next()
}

export default protect