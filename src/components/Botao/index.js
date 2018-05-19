/* Importações padrões */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import ss from './styles';

/* construção do componente sem estado */
export default ({ onPressBotao, title }) => (
  <TouchableOpacity style={ss.container} onPress={onPressBotao}>
    <Text style={ss.botao}>{title}</Text>
  </TouchableOpacity>
);
