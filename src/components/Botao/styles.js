/* Importando class StyleSheet para criação de estilos com javascript */
import { StyleSheet as SS } from 'react-native';

export default SS.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  botao: {
    elevation: 2,
    alignSelf: 'center',
    paddingHorizontal: 60,
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    color: '#efefef',
  },
});
