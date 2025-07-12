import { Box, Typography, Container } from '@mui/material';
import { Button } from './ui/Button';

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
                        variant="primary"
                        size="large"
                        scrollTo="projects"
                        scrollDuration={500}
                    >
                        View My Work
                    </Button>
                </Box>
            </Container>
        </section>
    );
}