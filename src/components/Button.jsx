import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

export default function Button({ onPress, title, loading }) {
  return (
    <TouchableOpacity
      className='rounded-md p-2'
      onPress={onPress}
      disabled={loading} // Desactiva el botón mientras está cargando
    >
      <View  className=' flex flex-row items-center justify-center'>
        {loading ? (
          <ActivityIndicator size='small' color='#ffffff' /> // Spinner blanco pequeño
        ) : (
          <Text className='text-lg font-bold text-white text-[15px]'>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
