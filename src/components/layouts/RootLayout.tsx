import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, CssBaseline, Container } from '@mui/material';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />

            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        InvestAI
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
                {children}
            </Container>

            <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.100' }}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} InvestAI. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
