import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Todo } from "../components/Todo";
import { AppContext } from "../store";

export const TodoList = () => {
    const { toDoState, toDoDispatch } = useContext(AppContext);
    const { todos } = toDoState;
    console.log({ todos });
    return (
        <SafeAreaView style={styles.wrapper}>
            <FlatList
                data={todos}
                numColumns={1}
                renderItem={(todo) => <Todo todo={todo.item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // marginLeft: 16,
        // marginRight: 16,
        // marginBottom: 80,
    },
});
