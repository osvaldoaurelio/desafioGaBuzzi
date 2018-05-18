/* Importações padrões */
import React from 'react';
import { View } from 'react-native';

/* Importando componente stateless Botao */
import { Botao } from '../Botao';

/* Importando objetos de estilização do arquivo styles.js */
import ss from './styles';

/* construção do componente sem estado */
export const Footer = ({theme, onPressFooter}) => (
  <View style={[ss.container, theme]}>
    <View style={ss.botoesContainer}>
      <Botao title="Blue" onPressBotao={() => onPressFooter('blue')} />
    </View>
    <View style={ss.botoesContainer}>
      <Botao title="Dark" onPressBotao={() => onPressFooter('dark')} />
    </View>
  </View>
);
