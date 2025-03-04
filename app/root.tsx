import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function RootScreen() {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Root Screen</Text>
            <Button title="Go to Home" onPress={() => { router.navigate('/home')}} />
            <Text></Text>
            <Button title="Go to Profile" onPress={() => { router.navigate('/profile')}} />
        </View>
    );
}