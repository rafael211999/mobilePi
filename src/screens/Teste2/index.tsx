import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Teste2() {
    const { navigate } = useNavigation<NavigationProp<any>>();
   
    return (
        <View >
            <Text style={styles.textStyle} >Segunda tela de teste</Text>
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    }, btnText: {
        display: "flex",
        backgroundColor: "red",
        padding: 25,
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",

    },

})