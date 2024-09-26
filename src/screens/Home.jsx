import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import Button from '../components/Button';

export default function Home() {
  // Datos de ejemplo para las listas de productos
  const data1 = [
    { id: '1', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 1' },
    { id: '2', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 2' },
    { id: '3', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 3' },
    { id: '4', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 4' },
    { id: '5', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 5' },
    { id: '6', image: 'https://via.placeholder.com/100', title: 'Nombre de la conferencia 6' }
  ];

  // Componente para cada item de la lista
  const ListItem = ({ item }) => (
    <View className='w-full h-30  mb-3 p-2 bg-white rounded-lg shadow-md items-center justify-center'>
      <Text className='mt-2 text-sm font-bold'>{item.title}</Text>
      <Text className='mt-2 text-sm font-bold'>Fecha : 25-09-2024</Text>
      <View className='w-20 bg-green-600 rounded-xl'>
        <Button title='Asistir' />
      </View>
    </View>
  );

  return (
    <View className='flex-1 p-4 bg-gray-100'>
      {/* Lista 1 */}
      <FlatList
        data={data1}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
