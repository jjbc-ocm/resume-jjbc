import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { Email } from '@mui/icons-material';

export default function Contact() {
    return (
        <section id="contact" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
            padding: "80px 0"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Email sx={{ fontSize: 40, mr: 2, color: '#6366f1' }} />
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            sx={{ 
                                fontWeight: 800, 
                                color: 'white',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Contact
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="#d1d5db" sx={{ fontWeight: 400 }}>
                        Let's work together
                    </Typography>
                </Box>
                
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 4, 
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    <Typography 
                        variant="body1" 
                        color="#6b7280" 
                        sx={{ 
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                            textAlign: 'center',
                            mb: 3
                        }}
                    >
                        Contact form will be here...
                    </Typography>
                    
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<Email />}
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 25px rgba(99, 102, 241, 0.4)'
                                },
                                transition: 'all 0.3s ease-in-out'
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </section>
    );
}