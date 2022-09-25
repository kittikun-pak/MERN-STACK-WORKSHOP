export const authenticate = (response, next) => {
    if(window !== "undefined") {
        sessionStorage.setItem("token", JSON.stringify(response.data.token))
        sessionStorage.setItem("user", JSON.stringify(response.data.username))
    }
    next()
}

// ดึงข้อมูล token จาก session storage
export const getToken = () => {
    if(window !== "undefined") {
        if(sessionStorage.getItem("token")) return JSON.parse(sessionStorage.getItem("token"))
    } else return false
}

// ดึงข้อมูล user จาก session storage
export const getUser = () => {
    if(window !== "undefined") {
        if(sessionStorage.getItem("user")) return JSON.parse(sessionStorage.getItem("user"))
    } else return false
} 