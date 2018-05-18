/* Importando class StyleSheet para criação de estilos com javascript */
import { StyleSheet as SS } from 'react-native';

export default SS.create({
  container: {
    flex: 1,
    backgroundColor: '#4682b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#eee',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
