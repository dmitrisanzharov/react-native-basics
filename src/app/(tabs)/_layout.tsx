import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: 'main tabs page' }} />
            <Tabs.Screen
                name='tabOne'
                options={{
                    title: 'tab one is open',
                    tabBarIcon: (options) => {
                        // console.log('options: ', options);
                        return <Text>Tab One Omg</Text>;
                    }
                }}
            />
        </Tabs>
    );
}
