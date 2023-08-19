import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const characterService={
    getAll:(page)=> axiosService.get(urls.character, {params:{page:page}})
}

export {
    characterService
}
