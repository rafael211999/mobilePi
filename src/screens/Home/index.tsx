import 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonController';
import Btn from '../../components/btn/Btn';
import InputData from '../../components/inputData/InputData';
import Teste from '../Teste';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchbar/SearchBar';


export default function Home() {

    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        getAllPokemon().then(setPokemons).catch((err) => console.log(err))
    })


    return (

        <ScrollView style={styles.scrollContainer}>
            <Header />
            <View style={styles.viewContainer}>
                
                {/* <InputData /> */}
                <Btn />
                <TouchableOpacity style={styles.btnText} onPress={() => navigate('Teste')}>
                    <Text>Ir para a tela teste</Text>
                </TouchableOpacity>
                <Card data={pokemons} />
            </View>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9e064a',
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
        backgroundColor: '#9e064a',
    },
    btnText: {
        display:"flex",
        flex: 1,
        backgroundColor: "red",
        marginHorizontal: 80,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center",

    },
    viewContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#cee1d8',
    }
});

