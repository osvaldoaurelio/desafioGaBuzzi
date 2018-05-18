import { StyleSheet as SS } from 'react-native';

export const { container, botao } = SS.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  botao: {
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    color: '#eee',
    backgroundColor: '#4682b4',
    elevation: 2,
    alignSelf: 'center',
    paddingHorizontal: 60,
    paddingVertical: 5,
  },
});
