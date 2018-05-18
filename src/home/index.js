/**
 * @name: App desafio Gabriel Buzzi
 * @since: 2018-05-14
 * @author: Osvaldo Aurélio Ribeiro Silva
 * @version: 0.1.0
 */

/* Importação padrão do react para classes */
import React, { Component } from 'react';
/* Importando componentes do react-native */
import { View, Alert } from 'react-native';
/* Importação padrão do axios para requesições */
import axios from 'axios';

/* Importando arquivo de configuração do Reactotron */
import '../config/ReactotronConfig';
/* Importação de componentes stateless */
import { Header } from '../components/Header';
import { Body } from '../components/Body';
import { Footer } from '../components/Footer';

/* Importando objetos de estilização */
import { container, header, main, footer } from './styles';

/* Declaração da classe do component Home */
export default class Home extends Component {
  /* Primeira estrutura - estados */
  state = {
    itens: [
      { id: 1, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 2, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 3, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 4, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 5, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 6, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
      { id: 7, name: 'osvaldo', full_name: 'osvaldo aurelio', avatar_url: './img.jpg' },
    ],
  };

  /* Segunda estrutura - antes de renderizar-se */
  componentDidMount() {
    this.buscarApi();
  }

  buscarApi = async () => {
    /* mockapi - site para testar API - ainda nao conseguir fazer funcionar */
    // const url = 'https://5adfd65a17a03000145b2539.mockapi.io/api/v1/users/';
    /* API Repositórios github - array de objetos */
    const url = 'ahttps://api.github.com/users/osvaldoaurelio/repos';
    /* API Usuário github - apenas um objeto */
    // const url = 'https://api.github.com/users/osvaldoaurelio';
    /* API ruby on rails - local - para testes - não consegui funcionar */
    // const url = 'http://localhost:3000/users';
    try {
      const response = await axios.get(url);
      const itens = response.data;
      this.setState({ itens });
    } catch (error) {
      Alert.alert(
        'Conexão caiu!',
        `${error}\nouh me ajuda aqui...`,
      );
    }
  };

  /* Terceira estrutura - renderização do mesmo */
  render() {
    return (
      <View style={container}>
        <View style={header}>
          <Header title="App desafio Gabriel Buzzi" />
        </View>
        <View style={main}>
          <Body dados={this.state.itens} />
        </View>
        <View style={footer}>
          <Footer />
        </View>
      </View>
    );
  }
}
