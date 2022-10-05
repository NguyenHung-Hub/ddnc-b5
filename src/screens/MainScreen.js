import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AddToDo } from "./AddToDo";
import { TodoList } from "./TodoList";

export const MainScreen = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <AddToDo />
            <TodoList />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        // flexDirection: "column",
        // justifyContent: "space-between",
        width: "100%",
        // height: "100%",

        paddingHorizontal: 24,
    },
    btn: {
        marginBottom: 16,
    },
});
