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
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Hi, I'm Jilmer <span role="img" aria-label="waving hand">👋</span>
                    </Typography>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: '#d1d5db',
                            mb: 3,
                            fontWeight: 400,
                            fontSize: { xs: '1.2rem', md: '1.7rem' }
                        }}
                    >
                        I build games and interactive web experiences that blend creativity with performance.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#cbd5e1',
                            mb: 4,
                            fontWeight: 400,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.7
                        }}
                    >
                        From real-time multiplayer games to WebGL blockchain projects, I bring ideas to life with clean code, smooth gameplay, and thoughtful UX.
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