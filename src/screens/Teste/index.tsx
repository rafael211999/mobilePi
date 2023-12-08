import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Teste() {
    const { navigate } = useNavigation<NavigationProp<any>>();
    return (
        <View >
            <Text style={styles.textStyle} >Olá eu sou uma tela teste</Text>
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('Teste2')}>
                <Text>Ir para a tela teste2</Text>
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