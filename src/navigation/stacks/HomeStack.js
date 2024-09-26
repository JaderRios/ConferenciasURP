import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'home'}
        component={Home}
        options={{
          headerBackTitleVisible: false,
          title: 'PROXIMAS CONFERENCIAS'
        }}
      />
    </Stack.Navigator>
  );
}
