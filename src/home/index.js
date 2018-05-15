/**
 * @name: App desafio Gabriel Buzzi
 * @since: 2018-05-14
 * @author: Osvaldo Aurélio Ribeiro Silva
 * @version: 0.1.0
 */

/* Importação padrão do react para classes */
import React, { Component } from 'react';
/* Importando componentes do react-native */
import { Text, View, Alert, TouchableOpacity } from 'react-native';
/* Importando arquivo de configuração do Reactotron */
import '../config/ReactotronConfig';
/* Importação padrão do axios para requesições */
import axios from 'axios';
/* Importação do componente stateless Head */
import { Header } from '../components/Header';

/* Declaração da classe do component Home */
export default class Home extends Component {
  /* Primeira estrutura - estados */
  state = {
    itens: [],
  };
  /* Segunda estrutura - antes de renderizar-se */
  async componentDidMount() {
    /* mockapi - site para testar API - ainda nao conseguir fazer funcionar */
    const url = 'https://5adfd65a17a03000145b2539.mockapi.io/api/v1/users/';
    /* API Repositórios github - array de objetos */
    // const url = 'https://api.github.com/users/osvaldoaurelio/repos';
    /* API Usuário github - apenas um objeto */
    // const url = 'https://api.github.com/users/osvaldoaurelio';
    /* API ruby on rails - local - para testes - não consegui funcionar */
    // const url = 'http://localhost:3000/users';
    try {
      const response = await axios.get(url);
      const itens = response.data;
      this.setState({ itens });
    } catch (error) {
      console.tron.log('hmm');
      // Alert.alert('Conexão caiu!', `${error}\nouh me ajuda aqui...`);
    }
  }

  /* Terceira estrutura - renderização do mesmo */
  render() {
    return (
      <View style={container}>
        
          <Header title="App desafio Gabriel Buzzi" />
        
        <View style={main}>
          <Text style={textMain}>qualquer coisa</Text>
        </View>
        <View style={footer}>
          <TouchableOpacity>
            <Text style={btn}>botão 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={btn}>botão 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/* Importando objetos de estilização do arquivo styles.js */
import { 
  container, 
  header, 
  main,
  textMain,
  footer,
  btn,
} from './styles';
