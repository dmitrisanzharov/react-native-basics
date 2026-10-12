import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{ headerShown: true, headerStyle: { backgroundColor: 'red' }, headerTintColor: 'yellow' }}
        >
            <Stack.Screen name='index' options={{ title: 'omg its index' }} />
            <Stack.Screen name='about' options={{ title: 'about is lala land' }} />
        </Stack>
    );
}
