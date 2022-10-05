import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { AppProvider } from "./src/store";

export default function App() {
    return (
        <AppProvider>
            <View style={styles.container}>
                <MainScreen />
            </View>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
