import { Link, router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
    function handleRedirectToOtherTasks() {
        router.push('/other/other-task');
    }

    return (
        <View style={styles.container}>
            <Text>Index page</Text>
            <Link href='/about' style={{ paddingTop: '20px' } as any}>
                Go to about
            </Link>
            <Link href='/contact' style={{ paddingTop: '20px' } as any}>
                Go to contact
            </Link>
            <Link href='/other/other-task' style={{ paddingTop: '20px' } as any}>
                Go to Other
            </Link>
            <View style={{ paddingTop: '20px' } as any}>
                <Button title='redirect to other tasks' onPress={handleRedirectToOtherTasks}></Button>
            </View>
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
