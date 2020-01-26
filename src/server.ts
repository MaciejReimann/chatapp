import express from "express"
import socket from "socket.io"

const app = express()
const server = app.listen(5000, () => console.log("server running"))
const io = socket(server)

app.get("/", (reg, res) => {
  res.send("Hello")
})

io.sockets.on("connection", () => newConnection)

console.log(process.env.NODE_ENV)

function newConnection() {
  console.log("Connection established")
}
