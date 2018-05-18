/* Importações padrões */
import React from 'react';
import { View, Text } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import { container, titleStyle } from './styles';

/* construção do componente sem estado */
export const Header = ({ title }) => (
  <View style={container}>
    <Text style={titleStyle}>{title}</Text>
  </View>
);
