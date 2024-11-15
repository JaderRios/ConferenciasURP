import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../../screens/Main';
import ChangePassword from '../../screens/ChangePassword';
import CreateAccount from '../../screens/CreateAccount';
import { COLOR_PRIMARIO } from '../../utils/constantes';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'login'}
        component={Main}
        options={{
          title: 'Iniciar Sesión',
          headerShown: false
        }}
      />

      <Stack.Screen
        name={'crearCuenta'}
        component={CreateAccount}
        options={{
          headerBackTitleVisible: false,
          title: 'Crear Cuenta'
        }}
      />
      <Stack.Screen
        name={'cambiarContrasenia'}
        component={ChangePassword}
        options={{
          headerBackTitleVisible: false,
          title: 'CambiarContraseña'
        }}
      />
    </Stack.Navigator>
  );
}
