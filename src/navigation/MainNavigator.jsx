import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PokedexScreen from '../screens/PokedexScreen'

const Stack = createNativeStackNavigator()

function MainNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Pokedex' component={PokedexScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
