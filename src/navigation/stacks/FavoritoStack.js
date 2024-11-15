import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorito from '../../screens/Favorito';
import { COLOR_PRIMARIO } from '../../utils/constantes';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/Icon';
import AlertaButton from '../../components/AlertaButton';
import Alerta from '../../screens/Alerta';

const Stack = createNativeStackNavigator();

export function FavoritoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'favorito'}
        component={Favorito}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLOR_PRIMARIO // Cambia este valor al color que desees
          },
          title: 'FAVORITOS',
          headerRight: () => <AlertaButton />
        }}
      />
      <Stack.Screen
        name={'alertas'}
        component={Alerta}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLOR_PRIMARIO // Cambia este valor al color que desees
          },
          title: 'ALERTAS'
        }}
      />
    </Stack.Navigator>
  );
}
