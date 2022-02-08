import {
    get
} from "./request.service";

export const getHistory = (params) => {
    return get(params);
}