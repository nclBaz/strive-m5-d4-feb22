import express from "express"
import multer from "multer"

import { saveUsersAvatars } from "../../lib/fs-tools.js"

const filesRouter = express.Router()

filesRouter.post("/:userId/avatar", multer().single("avatar"), async (req, res, next) => {
  // "avatar" needs to match exactly to the field name appended to the FormData object in the FE, otherwise Multer is not going to be able to find the file into the request body
  try {
    console.log("FILE: ", req.file)
    await saveUsersAvatars(req.file.originalname, req.file.buffer)
    res.send()
  } catch (error) {
    next(error)
  }
})

filesRouter.post("/multipleUpload", multer().array("avatars"), async (req, res, next) => {
  try {
    console.log("FILE: ", req.files)

    const arrayOfPromises = req.files.map(file => saveUsersAvatars(file.originalname, file.buffer))

    await Promise.all(arrayOfPromises)

    res.send()
  } catch (error) {
    next(error)
  }
})

export default filesRouter
