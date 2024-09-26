import { View, Text } from 'react-native';
import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default function Icon({ name, size, color}) {
  return <IconFA name={name} size={size} color={color} />;
}
