import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import { COLOR_PRIMARIO } from '../../utils/constantes';
import { Text, TouchableOpacity } from 'react-native';
import Icon from '../../components/Icon';
import AlertaButton from '../../components/AlertaButton';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'home'}
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLOR_PRIMARIO // Cambia este valor al color que desees
          },
          title: 'CONFERENCIAS',
          headerRight: () => <AlertaButton />
        }}
      />
    </Stack.Navigator>
  );
}
