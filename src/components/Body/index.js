/* Importações padrões */
import React from 'react';
import { Text, View, Image, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import ss from './styles';

const tosty = ({ item }) =>
  ToastAndroid.show(`Default branch: ${item.default_branch}`, ToastAndroid.SHORT);

const meuRenderItem = ({ item }) => (
  <TouchableOpacity style={ss.container} onPress={() => tosty({ item })}>
    <View style={ss.inRow}>
      <View style={ss.imagemV}>
        <Image style={ss.imagem} source={{ uri: item.owner.avatar_url }} />
      </View>
      <View style={ss.textContainer}>
        <Text style={ss.textMain}>{item.name}</Text>
        <View style={ss.borderStyle} />
        <Text style={ss.textSecond}>{item.full_name}</Text>
      </View>
    </View>
    <View style={[ss.inRow, ss.inRowS]}>
      <View style={ss.listFooter}>
        <Text style={ss.listText}>Size: {item.size}</Text>
      </View>
      <View style={ss.listFooter}>
        <Text style={ss.listText}>Language: {item.language}</Text>
      </View>
      <View style={ss.listFooter}>
        <Text style={ss.listText}>Forks: {item.forks}</Text>
      </View>
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
