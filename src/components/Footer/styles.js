/* Importando class StyleSheet para criação de estilos com javascript */
import { StyleSheet as SS } from 'react-native';

export default SS.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4682b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoesContainer: {
    flex: 1,
    marginHorizontal: 6,
    paddingHorizontal: 2,
  },
});
