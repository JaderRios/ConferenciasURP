import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { useNavigation } from '@react-navigation/native';

export default function AlertaButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FavoritoStack', { screen: 'alertas' })}
      style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
    >
      <Icon name='bell' size={30} color='white' />
    </TouchableOpacity>
  );
}
