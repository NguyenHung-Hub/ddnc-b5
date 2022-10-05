import React, { useReducer } from "react";
import AppContext from "./AppContext";
import reducer, { initState } from "./reducer";

function AppProvider({ children }) {
    const [toDoState, toDoDispatch] = useReducer(reducer, initState);
    return (
        <AppContext.Provider value={{ toDoState, toDoDispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
