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
import ss from './styles';

/* Declaração da classe do component Home */
export default class Home extends Component {
  /* declaração e inicialização do estado do compontente */
  state = {
    user: 'andreaugusto2d',
    itens: [
      {
        id: 0,
        name: '',
        full_name: '',
        owner: { avatar_url: 'img.jpg' },
        size: 0,
        language: '',
        forks: 0,
        default_branch: '',
      },
    ],
    theme: { backgroundColor: '#4682b4' },
  };

  /* método padrão ciclo de vida - antes de renderizar-se */
  componentDidMount() {
    this.buscarApi();
  }

  /* método async/await buscar API - não recomendado dentro do componentDidMount */
  buscarApi = async () => {
    /* mockapi - site para testar API - ainda nao conseguir fazer funcionar */
    // const url = 'https://5adfd65a17a03000145b2539.mockapi.io/api/v1/users/';
    /* API Repositórios github - array de objetos */
    const url = `https://api.github.com/users/${this.state.user}/repos`;
    /* API Usuário github - apenas um objeto */
    // const url = 'https://api.github.com/users/${this.state.user}';
    /* API ruby on rails - local - para testes - não consegui funcionar */
    // const url = 'http://localhost:3000/users';
    try {
      const response = await axios.get(url);
      const itens = response.data;
      this.setState({ itens });
    } catch (error) {
      Alert.alert(
        'Ocorreu um problema!',
        `
        ${error}
        
        ouh me ajuda aqui...`,
      );
    }
  };

  /* método para mudar background */
  switchTheme = (botao) => {
    const cor = botao === 'blue' ? '#4682b4' : '#303030';
    this.setState({
      theme: { backgroundColor: cor },
    });
  }
  addUser = async () => {
    const user = ([
      'osvaldoaurelio',
      'lucasedusi',
      'andreaugusto2d',
    ])[Math.random()*3 >> 0]; 
    await this.setState({
      user,
    });
    this.buscarApi();
  }
  /* método obrigatório para renderização do componente */
  render() {
    return (
      <View style={ss.container}>

        <View style={ss.header}>
          <Header
            title="App desafio Gabriel Buzzi"
            theme={this.state.theme}
            onPressHeader={this.addUser}
          />
        </View>

        <View style={ss.main}>
          <Body
            dados={this.state.itens}
          />
        </View>

        <View style={ss.footer}>
          <Footer
            theme={this.state.theme}
            onPressFooter={botao => this.switchTheme(botao)}
          />
        </View>

      </View>
    );
  }
}
