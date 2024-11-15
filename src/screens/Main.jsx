import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Login from '../../src/components/Login/Login';
import Profile from '../../src/components/Login/Profile';

export default function Main() {
  const [sesion, setSesion] = useState(false);

  return (
    <View className='flex-1'>
      {sesion == false ? <Login setSesion={setSesion} /> : <Profile setSesion={setSesion} />}
    </View>
  );
}
