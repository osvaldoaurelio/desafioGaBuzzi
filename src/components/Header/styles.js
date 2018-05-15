import { StyleSheet as SS } from 'react-native';

// const primaryColor1 = '#3700b3';
const primaryColor2 = '#4682b4';

export const { view, text } = SS.create({
  view: {
    flex: 1.75,
    backgroundColor: primaryColor2,
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 20,
  },
});
