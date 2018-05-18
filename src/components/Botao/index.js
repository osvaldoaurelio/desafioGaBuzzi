/* Importações padrões */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/* Importando objetos de estilização do arquivo styles.js */
import { container, botao } from './styles';

/* construção do componente sem estado */
export const Botao = ({title}) => (
  <TouchableOpacity style={container}>
    <Text style={botao}>{title}</Text>
  </TouchableOpacity>
);
