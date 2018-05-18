/* Importando class StyleSheet para criação de estilos com javascript */
import { StyleSheet as SS } from 'react-native';

export default SS.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
  },
  header: {
    flex: 3,
  },
  main: {
    paddingTop: 5,
    flex: 20,
    justifyContent: 'space-around',
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4682b4',
  },
});
