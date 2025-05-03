import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View
      style={styles.container}>
      <Image
        source={require('../../assets/bootsplash/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pokedex')}
      >
        <Text style={styles.buttonText}>Aller au pokedex</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
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


export default HomeScreen
