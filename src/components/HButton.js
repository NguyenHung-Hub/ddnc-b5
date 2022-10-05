import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HButton({
    style,
    text,
    textColor,
    fontSize,
    fontWeight = "normal",
    bgColor = "#fff",
    radius,
    width,
    paddingVert = 12,
    paddingHori = 36,
    borderColor = null,
    startIcon = null,
    endIcon = null,
    onPress,
}) {
    if (borderColor == null) {
        borderColor = bgColor;
    }

    return (
        <TouchableOpacity
            style={[
                styles.customBtn,
                {
                    paddingVertical: paddingVert,
                    paddingHorizontal: paddingHori,

                    width: width,

                    backgroundColor: bgColor,
                    borderRadius: radius,
                    borderColor: borderColor,
                    borderWidth: 1,
                },
                style,
            ]}
            onPress={onPress}
        >
            <View>{startIcon != null ? startIcon : ""}</View>
            <Text
                style={[
                    styles.textBtn,
                    { color: textColor, fontSize, fontWeight },
                ]}
            >
                {text}
            </Text>
            <View>{endIcon != null ? endIcon : ""}</View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    customBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingVertical: 12,
        paddingHorizontal: 36,

        backgroundColor: "#72D3FE",
    },
    textBtn: {
        color: "white",
        // fontWeight: "bold",
        fontSize: 24,
    },
});
