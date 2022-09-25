const e = require("express")
const jwt = require("jsonwebtoken")

exports.login = (request, response) => {
    const {username, password} = request.body
    if(password == process.env.PASSWORD) {
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return response.json({token, username})
    } else {
        return response.status(400).json ({
            error:"รหัสไม่ถูกต้อง!!"
        })
    }
}