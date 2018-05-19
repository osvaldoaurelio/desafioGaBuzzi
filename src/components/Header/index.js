/* Importações padrões */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import ss from './styles';

/* construção do componente sem estado */
export default ({ theme, onPressHeader, title }) => (
  <TouchableOpacity style={[ss.container, theme]} onPress={onPressHeader}>
    <Text style={ss.titleStyle}>{title}</Text>
  </TouchableOpacity>
);
