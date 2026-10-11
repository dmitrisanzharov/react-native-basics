import { StyleSheet, Text, View } from 'react-native';

export default function OtherTask() {
    return (
        <View style={styles.container}>
            <Text>OtherTask page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
