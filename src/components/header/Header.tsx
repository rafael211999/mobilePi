import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../searchbar/SearchBar';
import Bullets from '../bullets/Bullets';

export default function Header() {
    return (
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='auto' />
            <View style={styles.headerTopElemente} >
                <Text>Imagem</Text>
                <Text>Esse é um teste</Text>
                <Text>Icone</Text>
            </View>
            <SearchBar />
            <Bullets />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#05a1ad'
    },
    headerTopElemente: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    }
});