import axios from "axios"

const instance = axios.create({
    baseURL: "https://data.nasdaq.com/api/v3/datasets",
})

export default instance

