import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { Link, router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Share, StyleSheet, TextInput, View } from 'react-native';
// import { Button, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const storageKey = 'inputKeyFromExpo';

export default function Index() {
    // console.log('Platform', Platform);
    // console.log('Device', Device);
    console.log('Haptics', Haptics);

    const [input, setInput] = useState('');

    function handleRedirectToOtherTasks() {
        router.push('/other/other-task');
    }

    useEffect(() => {
        console.log('input', input);
        console.log('AsyncStorage', AsyncStorage);

        if (input?.length && input?.length > 5000) {
            console.log('trigger alert');
            Alert.alert('title', 'Second title');
        }

        async function setTheStorage() {
            try {
                await AsyncStorage.setItem(storageKey, input);
                const value = await AsyncStorage.getItem(storageKey);
                console.log('value: ', value);
            } catch (error) {
                console.log('error', error);
            }
        }

        setTheStorage();

        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        return () => {
            console.log('did NOT unmount, still mounted');
        };
    }, [input]);

    async function handleDelete() {
        await AsyncStorage.removeItem(storageKey);
    }

    useFocusEffect(
        useCallback(() => {
            return () => {
                console.log('screen unfocused');
            };
        }, [])
    );

    function handleShare() {
        Share.share({ message: 'check this app out' });
    }

    async function handleClipBoard() {
        console.log('Clipboard', Clipboard);
        await Clipboard.setStringAsync('clipboard message as a string');
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Link href='/about'>go to about</Link>
                    <Link href='/(tabs)'>go to tabs</Link>
                </View>

                <View
                    style={{
                        height: 1,
                        backgroundColor: 'black',
                        marginVertical: 10
                    }}
                />

                <TextInput style={{ border: '1px solid black' } as any} onChangeText={setInput} value={input} />

                <View
                    style={{
                        height: 1,
                        backgroundColor: 'black',
                        marginVertical: 10
                    }}
                />

                <Button title='delete storage' onPress={handleDelete} />

                <View
                    style={{
                        height: 1,
                        backgroundColor: 'black',
                        marginVertical: 10
                    }}
                />

                <Button title='share' onPress={handleShare} />

                <View
                    style={{
                        height: 1,
                        backgroundColor: 'black',
                        marginVertical: 10
                    }}
                />

                <Button title='clipboard message' onPress={handleClipBoard} />
            </SafeAreaView>
        </SafeAreaProvider>
    );

    // return (
    //     <View style={{ margin: 10 }}>
    //         <Button title='my button'></Button>
    //         <Pressable onLongPress={() => console.log('long press')}>
    //             <Text>Long press</Text>
    //         </Pressable>
    //         <TouchableOpacity onLongPress={() => console.log('long press')}>
    //             <Text>Long press</Text>
    //         </TouchableOpacity>
    //     </View>
    // );

    // return (
    //     <SafeAreaProvider>
    //         <SafeAreaView style={{ flex: 1 }}>
    //             <View>
    //                 <ScrollView>
    //                     <Text style={styles.bigText}>
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //                         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
    //                         ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
    //                         cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
    //                         sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
    //                         Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
    //                         conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
    //                         lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
    //                         Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
    //                         Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
    //                         ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
    //                         euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
    //                         torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
    //                         tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
    //                         facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
    //                         Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus
    //                         suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
    //                         pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante
    //                         ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
    //                     </Text>
    //                 </ScrollView>
    //                 <Text>omg</Text>
    //             </View>
    //         </SafeAreaView>
    //     </SafeAreaProvider>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigText: {
        fontSize: 40,
        display: 'none'
    }
});
