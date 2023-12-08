import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Teste from './src/screens/Teste';
import Teste2 from './src/screens/Teste2';



// Aqui eu etou criando a tipagem da minha navegação.
// Quando for criado novas telas, tenho que adicionar aqui.
type StackNavigationParamsList = {
  Home: undefined;
  Teste: undefined;
  Teste2: undefined;
}

// Aqui eu estou ciando uma navegação do tipo Stack que vai receber as minhas telas
const Stack = createStackNavigator<StackNavigationParamsList>();






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Teste' component={Teste} />
      <Stack.Screen name='Teste2' component={Teste2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
