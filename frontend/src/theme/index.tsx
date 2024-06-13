import { ReactNode, useMemo } from 'react';
// mui 
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import typography from './typography';
import palette from './palette';

interface ThemeProviderProps {
    children: ReactNode
}
export default function ThemeProvider({ children }: ThemeProviderProps) {

    const themeOptions = useMemo(() => ({
        palette,
        typography,
        shape: { borderRadius: 8 },
        spacing: 4,
    }), []);

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}