import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { dark, light } from './theme';

type Props = {
  children: JSX.Element;
};
interface ThemesProps {
  dark: ThemeOptions;
  light: ThemeOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ModeContext = createContext({ themeMode: () => {} });

export function ThemeMode({ children }: Props) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      themeMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => {
    const themes: ThemesProps = {
      light,
      dark,
    };
    return createTheme(themes[mode]);
  }, [mode]);

  return (
    <ModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
}
