/* Importações padrões */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

/* construção do componente sem estado */
export const Header = ({ title }) => (
  <View style={view}>
    <Text style={text}>
      {title}
    </Text>
  </View>
);

/* Importando objetos de estilização do arquivo styles.js */
import { view, text } from './styles';
