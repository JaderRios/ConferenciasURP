import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../src/components/Login/Login';
import Profile from '../../src/components/Login/Profile';

export default function Main() {
  const userSession = useSelector(state => state.loginReducer.user);
  console.log('SESION', userSession);

  return (
    <View className='flex-1'>
      {userSession == null ? <Login /> : <Profile />}
    </View>
  );
}
