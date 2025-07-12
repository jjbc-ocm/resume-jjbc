import { Box, Typography, Container, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';

export default function About() {
    return (
        <section id="about" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            padding: "80px 0"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Person sx={{ fontSize: 40, mr: 2, color: '#6366f1' }} />
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            sx={{ 
                                fontWeight: 800, 
                                color: '#1f2937',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            About Me
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="#6b7280" sx={{ fontWeight: 400 }}>
                        Get to know me better
                    </Typography>
                </Box>
                
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 4, 
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}
                >
                    <Typography 
                        variant="body1" 
                        color="#6b7280" 
                        sx={{ 
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                            textAlign: 'center'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Paper>
            </Container>
        </section>
    );
}