import { ThemeType } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';

export const theme: ThemeType = {
  global: {
    font: {
      family: 'Balsamiq Sans',
      size: '20px',
      height: '22px',
    },
  },
  accordion: {
    icons: {
      collapse: SubtractCircle,
      expand: AddCircle,
    },
    border: undefined,
  },
};
