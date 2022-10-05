import { Icon } from "@rneui/themed";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { actions, AppContext } from "../store";

export const Todo = ({ todo }) => {
    const { toDoState, toDoDispatch } = useContext(AppContext);
    const handleDelete = () => {
        toDoDispatch(actions.deleteToDo(todo.createdAt));
        console.log(todo.createdAt);
    };
    const handleUpdateStatus = () => {
        toDoDispatch(actions.deleteToDo(todo.createdAt));
        console.log(todo.createdAt);
    };

    return (
        <View style={styles.wrapper}>
            <Text
                style={[
                    styles.content,
                    {
                        textDecorationLine: `${
                            todo.status ? "line-through" : "normal"
                        }`,
                    },
                ]}
            >
                {todo.content}
            </Text>

            <View style={styles.wrapperRight}>
                <Icon name="delete" color="gray" onPress={handleDelete} />
                {todo.status ? (
                    <Icon
                        name="done"
                        color="green"
                        onPress={() =>
                            toDoDispatch(
                                actions.updateStatusToDo({
                                    createdAt: todo.createdAt,
                                    status: false,
                                })
                            )
                        }
                    />
                ) : (
                    <Icon
                        name="close"
                        color="red"
                        onPress={() =>
                            toDoDispatch(
                                actions.updateStatusToDo({
                                    createdAt: todo.createdAt,
                                    status: true,
                                })
                            )
                        }
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",

        padding: 8,
        marginBottom: 8,

        height: 80,

        width: "100%",
        backgroundColor: "#eee",
        borderRadius: 8,
    },
    wrapperRight: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "100%",
    },
    content: {
        padding: 4,
        fontSize: 18,
    },
});
