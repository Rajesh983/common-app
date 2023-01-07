import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function NotFound() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <>
                    <CssBaseline />
                    <Typography component="h1" variant="h5">
                        404
                    </Typography>
                </>
            </Container>
        </ThemeProvider>
    );
}
