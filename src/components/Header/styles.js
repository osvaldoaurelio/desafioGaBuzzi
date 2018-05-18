import { StyleSheet as SS } from 'react-native';

import colors from '../../styles/colors';

export const { container, titleStyle } = SS.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.lighter,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
