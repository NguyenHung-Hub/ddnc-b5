import React, { useContext, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { actions, AppContext } from "../store";
import HButton from "../components/HButton";
import { HInput } from "../components/HInput";

export const AddToDo = () => {
    const { toDoState, toDoDispatch } = useContext(AppContext);
    const [text, setText] = useState("");

    // const textRef = useRef();

    const handleAdd = () => {
        if (text) {
            toDoDispatch(
                actions.addToDo({
                    content: text,
                    status: false,
                    createdAt: +new Date(),
                })
            );
            setText("");
            // textRef.current.focus();
        }
    };

    return (
        <View style={styles.wrapper}>
            <HInput
                // ref={textRef}
                value={text}
                borderColor="#ccc"
                placeholder="Create to do"
                borderWidth={1}
                fontSize={20}
                radius={8}
                style={styles.input}
                onChangeText={(text) => setText(text)}
            />
            <HButton
                text="Add to do"
                bgColor="#9BBBD5"
                radius={8}
                fontSize={20}
                textColor="white"
                fontWeight="bold"
                onPress={handleAdd}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        marginVertical: 20,
        width: "100%",
    },
    input: {
        height: 60,
        marginBottom: 20,
    },
});
