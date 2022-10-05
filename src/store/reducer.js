import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constant";

const initState = {
    todos: [
        {
            content: "Learn React Native",
            status: true,
            createdAt: +new Date(),
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }

        case DELETE_TODO: {
            const newList = [...state.todos];
            const index = newList.indexOf(
                newList.find((e, i) => e.createdAt == action.payload)
            );
            newList.splice(index, 1);
            return {
                ...state,
                todos: newList,
            };
        }

        case UPDATE_TODO: {
            const newList = [...state.todos];

            console.log({ hung: newList });

            newList.forEach((todo) => {
                if (todo.createdAt === action.payload.createdAt) {
                    todo.status = action.payload.status;
                    console.log({ update: todo });
                }
            });
            return {
                ...state,
                todos: newList,
            };
        }

        default:
            throw new Error("Invalid action");
    }
}
export { initState };
export default reducer;
