import axios from "axios";

const http = axios.create({
    baseURL: "https://api.jateng-pintar.teknoreka.com/api",
    headers: {
        "Accept": "application/json"

    }
});

export default http;