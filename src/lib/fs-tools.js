import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const { readJSON, writeJSON } = fs

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data")
console.log(dataFolderPath)
const booksJSONPath = join(dataFolderPath, "books.json")
const usersJSONPath = join(dataFolderPath, "users.json")

export const getUsers = () => readJSON(usersJSONPath)
export const writeUsers = usersArray => writeJSON(usersJSONPath, usersArray)
export const getBooks = () => readJSON(booksJSONPath)
export const writeBooks = booksArray => writeJSON(booksJSONPath, booksArray)
