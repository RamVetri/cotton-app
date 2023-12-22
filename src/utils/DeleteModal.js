import { Alert } from "react-native"

export function showConfirmDelete() {
    return new Promise((resolve) => {
        Alert.alert(
            'Delete',
            'Are you sure want to delete this data?',
            [
                {
                    text:'yes',
                    onPress: () => resolve(true), 
                },
                {
                    text:'No',
                    onPress: () => resolve(false),
                }
            ],
            {cancelable: true}
        )
    })
}