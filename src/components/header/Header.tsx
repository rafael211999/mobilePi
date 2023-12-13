import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../searchbar/SearchBar';
import Bullets from '../bullets/Bullets';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import imagemDefundo from '../../../assets/R.png';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Header() {
    return (
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='light' />
            <View style={styles.headerTopElemente} >
                <Image source={imagemDefundo} style={styles.imgOne}/>
                <Text style={styles.headerTopText}>One Piece</Text>
                <FontAwesome5 name="bell" size={24} style={styles.logo} color="white" />
            </View>
            <SearchBar />


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#000000'
    },
    headerTopElemente: {
        // flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        color: '#973fda'
    },
    headerTopText: {
        color: '#aee637',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    },logo: {
        maxHeight: 40,
        maxWidth: 40
    },
    imgOne: {
        maxHeight: 40,
        maxWidth: 40
    }

});