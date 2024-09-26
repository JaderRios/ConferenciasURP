import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../Input';
import Button from '../Button';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../actions/loginAction';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loginReducer.loading);

  const [form, setForm] = useState({
    username: 'rettodeveloper@gmail.com',
    password: '',
    grant_type: 'password'
  });

  const { username, password } = form;

  const onChange = (e, type) => {
    setForm({ ...form, [type]: e });
  };

  const nav = () => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    navigation.navigate('HomeStack', { screen: 'home' });
  };

  const loguear = () => {
    nav();
    /* console.log('FORM', form);
    dispatch(loginAction(form, nav)); */
  };

  const cambiarContrasenia = () => {
    navigation.navigate('cambiarContrasenia');
  };

  const crearCuenta = () => {
    navigation.navigate('crearCuenta');
  };

  const loguearFacebook = () => {
    Alert.alert('Inicio de sesión con Facebook');
  };

  const loguearGoogle = () => {
    Alert.alert('Inicio de sesión con Google');
  };

  return (
    <View className='flex-1 justify-center items-center bg-green-950'>
      <Text className='text-4xl font-bold text-white'>CONFERENCIAS</Text>
      <Text className='text-4xl font-bold text-white'>URP</Text>
      <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-[17px] mb-4  text-white h-6'>
        Por favor ingrese a tu cuenta
      </Text>
      <Input
        iconName='user'
        placeholder='Correo electrónico'
        name='username'
        value={username}
        onChangeText={onChange}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Input
        iconName='lock'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChangeText={onChange}
        secureTextEntry
      />
      <View className='w-full ml-80 mb-4'>
        <TouchableOpacity className='' onPress={cambiarContrasenia}>
          <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-white underline mb-3 text-[13px]'>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>

      <View className='mb-36 w-64 bg-green-600 rounded-2xl'>
        <Button title='INICIAR SESIÓN' onPress={loguear} loading={loading} />
      </View>

      <View className='flex-col mt-4'>
        <TouchableOpacity
          className='bg-white flex-row items-center justify-center w-auto h-12  rounded-2xl mb-2 px-4'
          onPress={loguearGoogle}
        >
          <Icon name='google' size={24} color='#ff6b90' />
          <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-black ml-2 font-semibold  '>
            Iniciar sesión con Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='bg-blue-700 flex-row items-center justify-center w-auto h-12 rounded-2xl px-4 mb-2 '
          onPress={loguearFacebook}
        >
          <View className='bg-blue-500 rounded-full w-[33px] h-[33px] items-center justify-center  '>
            <Icon name='facebook' size={24} color='white' background='#86b0f7' />
          </View>
          <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-white ml-2 font-semibold '>
            Iniciar sesión con Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row w-auto '>
        <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-[13px] text-white'>
          ¿No tienes una cuenta?
        </Text>
        <TouchableOpacity className='text-primario ml-2 ' onPress={crearCuenta}>
          <Text style={{ fontFamily: 'ZillaSlab_400Regular' }} className='text-white underline text-[13px] '>
            CREAR CUENTA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
