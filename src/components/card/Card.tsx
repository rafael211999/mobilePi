import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
    <Text>Teste card</Text>
    </View>
  );
};

const styles =  StyleSheet.create({
  card: {
    backgroundColor: '#9d9d9d',
    padding: 120,
    color: "black",
    with: 15,
    borderRadius: 25,
  },
});

export default Card;