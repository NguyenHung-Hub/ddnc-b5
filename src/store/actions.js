import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constant";

export const addToDo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};
export const deleteToDo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const updateStatusToDo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload,
    };
};
