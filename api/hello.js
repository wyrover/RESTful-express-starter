import express from "express"

let router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "hello world" });
})

router.get("/test", (req, res) => {
    res.json({ message: "test" })
})

export { router }
