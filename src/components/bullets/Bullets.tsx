import { Text, View, StyleSheet } from "react-native";
import bullets from "../../services/bullets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Bullets() {
    return (
        <View style={styles.bulletsView}>
            {bullets.map((item) => {
                return (
                    <TouchableOpacity style={styles.touchableBtn}>
                    <Text style={styles.touchableText}>{item.name}</Text>
                    </TouchableOpacity>
                )

            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bulletsView: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10

    },
    touchableBtn: {
        backgroundColor: "#EBD348",
        borderRadius: 45,
        padding: 8,
        marginHorizontal: 5,
        marginVertical: 5
    },
    touchableText : {
        fontSize: 20,

    }

})