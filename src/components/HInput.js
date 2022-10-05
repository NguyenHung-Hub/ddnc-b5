import { StyleSheet, TextInput, View } from "react-native";

export const HInput = ({
    ref,
    value,
    style,
    borderWidth = 0,
    borderColor = "white",
    bgColor = "white",
    radius = 0,
    startIcon,
    endIcon,
    placeholder = "",
    fontSize = 18,
    onChangeText,
}) => {
    return (
        <View
            style={[
                styles.wrapper,
                {
                    borderWidth,
                    borderColor,
                    borderRadius: radius,
                    backgroundColor: bgColor,
                },
                style,
            ]}
        >
            {startIcon != null ? startIcon : <></>}

            <TextInput
                ref={ref}
                value={value}
                style={[styles.input, { fontSize }]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />

            {endIcon != null ? endIcon : <></>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        marginHorizontal: 8,

        // backgroundColor: "red",
    },
});
