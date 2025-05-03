import { useEffect, useState } from 'react'
import { Button, Text, View, FlatList, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native'

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'
const LIMIT = 10

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const getPokemonList = async (offset) => {
    if (!hasMore) return
    setIsLoading(true)
    try {
      const response = await fetch(`${POKEAPI_URL}?offset=${offset}&limit=${LIMIT}`)
      const data = await response.json()
      if (data.results.length === 0) {
        setHasMore(false)
        setIsLoading(false)
        return
      }
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url)
          const pokemonData = await pokemonResponse.json()
          return {
            name: pokemon.name,
            imageUrl: pokemonData.sprites.front_default
          }
        })
      )
      setPokemonList((prevList) => [...prevList, ...pokemonDetails])
      setOffset((prevOffset) => prevOffset + LIMIT)
    } catch (error) {
      console.error('Erreur lors du chargement des Pokémon :', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPokemonList(offset)
  }, [])

  const renderPokemonItem = ({ item }) => (
    <View style={styles.pokemonItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size='large' color='#0000ff' /> : null
        }
      />
      {hasMore && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => getPokemonList(offset)}
        >
          <Text style={styles.buttonText}>Afficher Plus</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#841435',
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 16
  },
  pokemonName: {
    fontSize: 18
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#841435',
    borderRadius: 5,
    color: '#fff',
  },
  buttonText: {
    color: '#f9c1cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Pokedex
