import { View, Text, FlatList, Image } from 'react-native';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';
import fakeData from '../../fakeData.json';
import { DataContext } from '../utils/DataContext';

export default function Home() {
  const { dataSeleccionada, setDataSeleccionada } = useContext(DataContext);
  console.log(dataSeleccionada);

  const actualizar = item => {
    if (!fueSeleccionado(item?.id)) agregar(item);
    if (fueSeleccionado(item?.id)) eliminar(item);
  };

  const eliminar = item => setDataSeleccionada(dataSeleccionada.filter(data => data.id !== item.id));

  const agregar = item => setDataSeleccionada(dataAnterior => [...dataAnterior, item]);

  const fueSeleccionado = id => {
    const index = dataSeleccionada.findIndex(item => item.id === id);
    if (index > -1) return true;
    return false;
  };

  // Componente para cada item de la lista
  const ListItem = ({ item }) => (
    <View className='w-full h-30 mb-3 p-2 bg-white rounded-lg shadow-md items-center justify-between flex-row '>
      <View className='w-3/4'>
        <Text className='mt-2 text-sm font-bold'>{item.title}</Text>
        <Text className='mt-2 text-sm font-bold'>Fecha : 25-09-2024</Text>
      </View>

      <TouchableOpacity
        onPress={() => actualizar(item)}
        className='bg-green-600 flex-row items-center justify-center w-auto h-12  rounded-2xl px-4'
      >
        <Icon name={fueSeleccionado(item?.id) ? 'check' : 'save'} size={24} color='' />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className='flex-1 p-4 bg-gray-100'>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
