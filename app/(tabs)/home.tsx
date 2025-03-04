import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function HomeScreen() {

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to Profile" onPress={() => { router.navigate('/profile')}} />
            <Text> </Text>
            <Button title="Go to Root" onPress={() => { router.navigate('/root')}} />
        </View>
    );
}