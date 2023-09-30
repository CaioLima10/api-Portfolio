import "reflect-metadata";
import express from "express";
import { createConnection } from 'typeorm'
import cors from "cors"
import * as CommentControllers from "./src/controllers/CommentControllers"

const PORT = 3000

async function startup() {
    await createConnection()
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.post("/comments", CommentControllers.save)
    app.get("/comments", CommentControllers.getAll)
    app.delete("/comments/:id", CommentControllers.deleteComment)

    app.listen(PORT, () => {
        console.log("App running on port " + PORT)
    })
}

startup()
