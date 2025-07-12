import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from "react-scroll";

export default function Header() {
    return (
        <section id="home" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                        variant="h1" 
                        component="h1" 
                        sx={{ 
                            fontWeight: 800,
                            color: 'white',
                            mb: 3,
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '3rem', md: '4rem' }
                        }}
                    >
                        Hello, I'm Jilmer
                    </Typography>
                    
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: '#d1d5db',
                            mb: 4,
                            fontWeight: 400,
                            fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                    >
                        I build things for the web.
                    </Typography>
                    
                    <Button
                        component={Link}
                        to="projects"
                        smooth={true}
                        duration={500}
                        variant="contained"
                        size="large"
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
                        View My Work
                    </Button>
                </Box>
            </Container>
        </section>
    );
}