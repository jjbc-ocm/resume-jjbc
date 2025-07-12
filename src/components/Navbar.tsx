import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link } from "react-scroll";

export default function Navbar() {

    // Helper method to render navigation buttons
    const renderNavButton = (to: string, label: string) => (
        <Button 
            component={Link}
            to={to}
            smooth={true}
            duration={250}
            sx={{ 
                color: 'white',
                fontWeight: 500,
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease-in-out'
            }}
        >
            {label}
        </Button>
    );

    // Navigation items data
    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' }
    ];

    // Render the navbar
    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navItems.map((item) => 
                            renderNavButton(item.to, item.label)
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}