import { Employee } from "../models/Employees";

export const next = (num: number, all: number) => {
    if(num <= all) {
        return num + 4;
    } else {
        return num;
    }
}

export const previous = (num: number) => {
    return num - 4;
}