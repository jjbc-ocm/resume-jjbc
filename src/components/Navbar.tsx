import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { Button } from './ui/Button';
import { Home, Info, Work, ContactMail } from '@mui/icons-material';

export default function Navbar() {

    // Navigation items data
    const navItems = [
        { to: 'home', label: 'Home', icon: <Home /> },
        { to: 'about', label: 'About', icon: <Info /> },
        { to: 'projects', label: 'Projects', icon: <Work /> },
        { to: 'contact', label: 'Contact', icon: <ContactMail /> }
    ];

    // Helper method to render navigation buttons
    const renderNavButton = (to: string, label: string, icon: React.ReactNode) => (
        <Button 
            variant="navigation"
            scrollTo={to}
            scrollDuration={250}
            sx={{
                flex: { xs: 1, sm: 'unset' },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: { xs: 0, sm: 64 },
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                gap: { xs: 0.2, sm: 1 },
                mt: { xs: 0.5, sm: 0 },
            }}
        >
            <Box
                sx={{
                    fontSize: { xs: '2rem', sm: '1.3rem' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 0.2, sm: 0 },
                }}
            >
                {icon}
            </Box>
            <Box
                sx={{
                    fontSize: { xs: '0.75rem', sm: '1rem' },
                    fontWeight: 500,
                    mt: { xs: 0.1, sm: 0 },
                    letterSpacing: 0.5,
                }}
            >
                {label}
            </Box>
        </Button>
    );

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
                    <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, width: '100%', justifyContent: 'center' }}>
                        {navItems.map((item) => 
                            renderNavButton(item.to, item.label, item.icon)
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}