import jwt from 'jsonwebtoken'

const generateAuthToken = (email, res) => {
    const user = { email }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '7d'
    })

    res.cookie('access_token', accessToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '3d'
    })
    return token
}

export { generateAuthToken,
        generateToken}