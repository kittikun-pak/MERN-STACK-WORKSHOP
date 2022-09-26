const e = require("express")
const jwt = require("jsonwebtoken")
const { expressjwt: expressjwt } = require("express-jwt")

exports.login = (request, response) => {
    const {username, password} = request.body
    if(password == process.env.PASSWORD) {
        const token = jwt.sign({username}, "mern-stack-crud-secret@12345", {expiresIn: '1d'})
        return response.json({token, username})
    } else {
        return response.status(400).json ({
            error:"รหัสไม่ถูกต้อง!!"
        })
    }
}


exports.requireLogin = expressjwt({
    secret: "mern-stack-crud-secret@12345",
    algorithms: ["HS256"],
    userProperty: "auth"
})