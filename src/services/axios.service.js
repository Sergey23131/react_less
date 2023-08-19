import axios from "axios";
import {baseURL} from "../constants/urls";

axios.create({baseURL})

const axiosService = axios.create({baseURL})

export {
    axiosService
}
