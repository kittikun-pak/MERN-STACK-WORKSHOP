const slugify = require("slugify")
const Blogs = require("../models/blogs")
const { v4: uuidv4 } = require('uuid')

exports.create = (request,response) => {
    const {title, content, author} = request.body
    let slug = slugify(title)

    if(!slug) slug = uuidv4()

    switch(true){
        case !title:
            return response.status(400).json({error: "กรุณาป้อนชื่อบทความ"})
        case !content:
            return response.status(400).json({error: "กรุณาป้อนเนื้อหา"})
    }
    Blogs.create({title, content, author, slug}, (error, blog) => {
        if (error) response.status(400).json({error: "ชื่อบทความซ้ำกับในระบบ"})
        response.json(blog)
    })
}

exports.getAllBlogs = (request, response) => {
    Blogs.find({}).exec((error,blogs) => {
        if (error) response.status(400).send(error)
        response.json(blogs)
    })
}

exports.singleBlog = (request, response) => {
    const {slug} = request.params
    Blogs.findOne({slug}).exec((error,blog) => {
        response.json(blog)
    })
}

exports.removeBlog = (request,response) => {
    const {slug} = request.params
    Blogs.findOneAndRemove({slug}).exec((error) => {
        if(error) {
            response.json({message: "มีข้อผิดพลาดเกิดขึ้นที่ฝั่ง Server"})
            console.log(error)
        }
        response.json({message: "ลบบทความเรียบร้อย"})

    })
}

exports.updateBlog = (request,response) => {
    const {slug} = request.params
    const {title, content, author} = request.body
    let newslug = slugify(title)
    if(!newslug) newslug = uuidv4()

    switch(true){
        case !title:
            return response.status(400).json({error: "กรุณาป้อนชื่อบทความ"})
        case !content:
            return response.status(400).json({error: "กรุณาป้อนเนื้อหา"})
    }

    Blogs.findOneAndUpdate({slug},{title, content, author, slug:newslug},{new:true}).exec((error,blog) => {
        if (error) response.status(400).json({error: "ชื่อบทความซ้ำกับในระบบ"})
        response.json(blog)
    })
}