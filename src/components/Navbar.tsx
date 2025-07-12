import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { Button } from './ui/Button';

export default function Navbar() {

    // Helper method to render navigation buttons
    const renderNavButton = (to: string, label: string) => (
        <Button 
            variant="navigation"
            scrollTo={to}
            scrollDuration={250}
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