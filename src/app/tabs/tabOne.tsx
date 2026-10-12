import { StyleSheet, Text, View } from 'react-native';

export default function TabOne() {
    return (
        <View style={styles.container}>
            <Text>Tab One</Text>
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
