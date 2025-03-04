import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function ProfileScreen() {

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title="Go to Home" onPress={() => { router.navigate('/home')}} />
            <Text> </Text>
            <Button title="Go to Root" onPress={() => { router.navigate('/root')}} />
        </View>
    );
}