'use client';

import { Box, Grid, Typography, Paper } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const cards = [
    {
        title: 'AI Investment Insights',
        icon: <AssessmentIcon fontSize="large" color="primary" />,
        description: 'Receive tailored investment suggestions powered by AI.',
    },
    {
        title: 'Portfolio Simulator',
        icon: <TimelineIcon fontSize="large" color="primary" />,
        description: 'Simulate different investment strategies and outcomes.',
    },
    {
        title: 'Current Holdings',
        icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
        description: 'Track your assets and monitor performance over time.',
    },
];

export default function HomePage() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to InvestAI
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Empower your financial decisions with intelligent tools.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {cards.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                textAlign="center"
                            >
                                {card.icon}
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
