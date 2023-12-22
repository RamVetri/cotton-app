import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 32,
        paddingRight: 16,
    },
    label: {
        flex: 1,
        fontWeight: '500',
        paddingVertical: 6,
    },
    rightContainer: {
        flex: 0.25,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
    },
})