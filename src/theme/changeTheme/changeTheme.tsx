import { useContext } from 'react';
import { ModeContext } from '~/theme';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ChangeTheme() {
  const theme = useTheme();
  const { themeMode } = useContext(ModeContext);
  return (
    <IconButton sx={{ ml: 1 }} onClick={themeMode} color='inherit'>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
