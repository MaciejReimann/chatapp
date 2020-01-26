import express from "express"

const app = express()

app.get("/", (reg, res) => {
  res.send("Hello")
})

app.listen(5000, () => console.log("server running"))
console.log(process.env.NODE_ENV)
