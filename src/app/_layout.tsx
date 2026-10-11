import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'omg its index' }} />
            <Stack.Screen name='about' options={{ title: 'omg its about' }} />
        </Stack>
    );
}
