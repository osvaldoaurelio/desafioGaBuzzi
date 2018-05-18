import { StyleSheet as SS } from 'react-native';

export const {
  container, header, main, footer,
} = SS.create({
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
