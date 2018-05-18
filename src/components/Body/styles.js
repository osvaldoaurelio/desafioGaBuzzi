import { StyleSheet as SS } from 'react-native';

export const { container, imagemV, imagem, textMain } = SS.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  textMain: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
  },
});
