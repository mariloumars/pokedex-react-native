import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PokemonDetail({ route }) {
    const { pokemon } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: pokemon.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{pokemon.name}</Text>
            {/* Ajoutez d'autres détails ici */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default PokemonDetail;
