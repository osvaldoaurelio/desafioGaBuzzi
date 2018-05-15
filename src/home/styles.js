import { 
  StyleSheet as SS 
} from 'react-native';

export const { 
  container, 
  header, 
  main,
  textMain,
  footer,
  btn,
} = SS.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 1.75,
  },
  main: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  textMain: {
    color: '#fff',    
    fontSize: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4682b4'
  },
  btn: {
    color: '#eee',
    paddingHorizontal: 60,
    paddingVertical: 4,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 8,
    elevation: 2,
    borderColor: '#ccc',
    backgroundColor: '#4682b4'
  },
});
