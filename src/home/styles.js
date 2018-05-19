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
    flex: 20,
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4682b4',
  },
});
