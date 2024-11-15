import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR_PRIMARIO } from '../../utils/constantes';
import { useNavigation } from '@react-navigation/native';

export default function Profile({ setSesion }) {
  const navigation = useNavigation();

  const cambiarContraseña = () => {
    // Lógica para cambiar la contraseña
    console.log('Cambiar contraseña');
  };

  const editarPerfil = () => {
    // Lógica para editar el perfil
    console.log('Editar perfil');
  };

  const ocultarNavegacion = () => navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });

  const cerrarSesion = () => {
    setSesion(false);
    ocultarNavegacion();
    console.log('Cerrar Sesion');
  };

  // Componente ListItem
  const ListItem = ({ title, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} className='p-4 border-b border-gray-300'>
        <Text className='text-lg'>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className='flex-1 justify-center p-4'>
      <Text className='text-2xl mb-5 text-center'>Proyecto SIE</Text>
      <View className='mb-5'>
        <ListItem title='Editar Datos' onPress={editarPerfil} />
        <ListItem title='Cambiar Contraseña' onPress={cambiarContraseña} />
      </View>
      <Button title='Cerrar Sesión' onPress={cerrarSesion} color={COLOR_PRIMARIO} />
    </View>
  );
}
