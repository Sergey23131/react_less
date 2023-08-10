import {IUser} from "../interfaces/user.interface";
import {IRes} from "../types/axiosRes";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.users),
    getById: (id: number): IRes<IUser> => axiosService.get(urls.users.byId(id))
}

export {userService}
