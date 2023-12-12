import { Text, View } from "react-native";
import bullets from "../../services/bullets";

export default function Bullets() {
    return (
        <View>
            {bullets.map((item) => {
                return (
                    <Text>{item.name}</Text>
                )

            })}
        </View>
    )
}