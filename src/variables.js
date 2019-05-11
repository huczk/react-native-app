import { StyleSheet } from 'react-native';

const colors = {
  WHITE: '#FFFFFF',
  BLUE: '#00293e',
  BLUE_20: '#00293e20',
  BLUE_80: '#00293e80',
};

const baseStyles = StyleSheet.create({
  flex: { flex: 1 },
  textName: {
    fontSize: 22,
    color: colors.BLUE,
  },
  textDesc: {
    fontSize: 14,
    color: colors.BLUE_80,
  },
  textDetails: {
    fontSize: 11,
    color: colors.BLUE_80,
    marginRight: 8,
  },
  paddingHorizontal: {
    paddingHorizontal: 8,
  },
});

export {
  colors,
  baseStyles,
};
