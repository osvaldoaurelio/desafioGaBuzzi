/* Importações padrões */
import React from 'react';
import { Text, View, Image, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import { container, imagemV, imagem, textMain } from './styles';

const tosty = ({ item }) => ToastAndroid.show(`${item.full_name}`, ToastAndroid.SHORT);

const meuRenderItem = ({ item }) => (
  <TouchableOpacity style={container} onPress={() => tosty({ item })}>
    <View style={imagemV}>
      <Image style={imagem} source={require('./img.jpg')} />
    </View>
    <View>
      <Text style={textMain}>{item.name}</Text>
      <Text>{item.full_name}</Text>
    </View>
  </TouchableOpacity>
);

/* construção do componente sem estado */
export const Body = ({ dados }) => (
  <FlatList
    data={dados}
    renderItem={({ item }) => meuRenderItem({ item })}
    keyExtractor={item => `id:${item.id}`}
  />
);
