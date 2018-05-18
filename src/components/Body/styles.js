/* Importando class StyleSheet para criação de estilos com javascript */
import { StyleSheet as SS } from 'react-native';

export default SS.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 6,
  },
  imagemV: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
    height: 88,
    borderRadius: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    marginRight: 10,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textMain: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
  textSecond: {
    fontSize: 16,
    color: '#111',
  },
  borderStyle: {
    margin: 2,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 1,
  },
  inRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  inRowS: {
    marginTop: 12,
    justifyContent: 'space-between',
    backgroundColor: '#444',
  },
  listFooter: {
    margin: 3,
  },
  listText: {
    color: '#eee',
    alignSelf: 'center',
  }
});
