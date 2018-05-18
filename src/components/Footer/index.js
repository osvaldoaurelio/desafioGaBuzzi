/* Importações padrões */
import React from 'react';
import { View } from 'react-native';

import { Botao } from '../Botao';

/* Importando objetos de estilização do arquivo styles.js */
import { container, botoesContainer } from './styles';

/* construção do componente sem estado */
export const Footer = () => (
  <View style={container}>
    <View style={botoesContainer}>
      <Botao title="botão 1" />
    </View>
    <View style={botoesContainer}>
      <Botao title="botão 2" />
    </View>
  </View>
);
