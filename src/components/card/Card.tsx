import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps, View } from 'react-native';

type Props = {
  data: Pokemon[];
} & TouchableOpacityProps



export default function Card({ data, ...rest }: Props) {
  return (
    <View >
      {data.map((item) => {
        return (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#edbe71',
    paddingVertical: 40,
    color: "black",
    borderRadius: 25,
    margin: 10,
    alignItems: "center",
    marginBottom: 25
  },
});

// O ...rest, vai permitir pegar todos os dados que estão vindo alem de data, dando a possibilidade de eu poder acessar e usar esses dados se eu quiser.