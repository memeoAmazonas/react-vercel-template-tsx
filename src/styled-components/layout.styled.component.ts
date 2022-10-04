import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Stack)(({ theme }) => ({
  boxShadow: theme.shadows[12],
  margin: '0 auto',
  minHeight: 'calc(100vh - 104px)',
  padding: '20px 30px',
  width: 'calc(100vw -60px)',

  '@media only screen and (min-width: 2401px)': {
    width: 2400,
  },
})) as typeof Stack;
