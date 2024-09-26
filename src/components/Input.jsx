import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Input({
  iconName,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  name
}) {
  return (
    <View  className='flex-row items-center bg-[#D9D9D9] border-gray-200 rounded-xl border border-gray-350 px-2 mt-4 w-10/12 '>
      <Icon name={iconName} size={20} color='#888' />
      <TextInput style={{fontFamily:"ZillaSlab_400Regular"}}
        className='flex-1 h-10 text-gray-800 pl-2 '
        placeholder={placeholder}
        value={value}
        onChangeText={e => onChangeText(e, name)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor='#888'
      />
    </View>
  );
}
