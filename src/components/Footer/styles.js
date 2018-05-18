import { StyleSheet as SS } from 'react-native';

import colors from '../../styles/colors';

export const { container, botoesContainer } = SS.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoesContainer: {
    flex: 1,
    marginHorizontal: 6,
    paddingHorizontal: 2,
  },
});
