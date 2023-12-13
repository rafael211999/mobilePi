import { ImageBackground, StyleSheet, Text, TouchableOpacityProps, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import bullets from '../../services/bullets';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonController';
import ImgFundo from '../../../assets/paisagem.jpg';


type Props = {
    data: Pokemon[];
} & TouchableOpacityProps


export default function Carrossel({data, ...rest }: Props) {

    // const { navigate } = useNavigation<NavigationProp<any>>();

    // const [pokemons, setPokemons] = useState<Pokemon[]>([])

    // useEffect(() => {
    //     getAllPokemon().then(setPokemons).catch((err) => console.log(err))
    // })

    const poke = data.map((item) => {
        return item
    })


    return (
        <View>
            <Carousel
                containerCustomStyle={{ overflow: 'visible' }}
                data={poke}
                renderItem={({item}) => {
                    return (
                        <View style={styles.itemView}>
                            <ImageBackground source={ImgFundo} style={styles.backgroundImg}
                            blurRadius={2} borderRadius={20}><Text style={styles.backgroundText}>{item.name}</Text></ImageBackground>
                            
                        </View>
                    )

                }}
                firstItem={1}
                inactiveSlideOpacity={0.75} // Opacidade de itens inativos
                inactiveSlideScale={0.77} // Tamanho dos itens inativos
                sliderWidth={400} // tamanho na horizontal desse slider
                itemWidth={200} // tamanho do item
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    );

}


const styles = StyleSheet.create({
    itemView: {
        backgroundColor: "#31aceb",
        width: 200,
        height: 300,
        borderRadius: 25,
        margin: 10
     
    },backgroundImg:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 20,
        
    },backgroundText: {
        color: 'white',
        fontSize: 20
    }
})
