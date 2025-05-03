import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PokedexScreen from '../screens/PokedexScreen'
import PokemonDetail from '../screens/PokemonDetail'

const Stack = createNativeStackNavigator()

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Pokedex' component={PokedexScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  )
}

export default MainNavigator
