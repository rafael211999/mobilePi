import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Btn from '../../components/btn/Btn';
import InputData from '../../components/inputData/InputData';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonController';
import Teste from '../Teste';
import Card from '../../components/card/Card';


export default function Home() {

    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        getAllPokemon().then(setPokemons).catch((err) => console.log(err))
    })


    return (
        // <ScrollView style={styles.scrollContainer}>
        <View>
            <StatusBar style="auto" />
            <Btn />
            <TouchableOpacity style={styles.btnText} onPress={() => navigate('Teste')}>
                <Text>Ir para a tela teste</Text>
            </TouchableOpacity>
            <Text >Rafael Alves de souza</Text>
            <InputData />
            <Card  data = {pokemons}  />
        </View>



        // </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',

    },
    statusbar: {

    },
    safeAreaContainer: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    btnText: {
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
});

