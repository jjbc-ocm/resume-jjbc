import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, Info, Work, ContactMail, Description } from '@mui/icons-material';
import { Button } from './ui/Button';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { to: 'home', label: 'Home', icon: <Home /> },
    { to: 'about', label: 'About', icon: <Info /> },
    { to: 'projects', label: 'Projects', icon: <Work /> },
    { to: 'contact', label: 'Contact', icon: <ContactMail /> },
    { to: 'resume', label: 'Resume', icon: <Description /> }
  ];

  const handleNavClick = (to: string) => {
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setDrawerOpen(false);
  };

  // Helper method to render navigation buttons
  const renderNavButton = (to: string, label: string, icon: React.ReactNode) => (
    <Button 
      variant="navigation"
      onClick={() => handleNavClick(to)}
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
        <Toolbar sx={{ justifyContent: isMobile ? 'flex-start' : 'center', minHeight: { xs: 56, sm: 64 } }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ sx: { width: 240, background: 'white' } }}
              >
                <Box sx={{ mt: 2 }}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        component="button"
                        disableGutters
                        key={item.to}
                        onClick={() => handleNavClick(item.to)}
                        sx={{
                          background: 'none',
                          border: 'none',
                          borderRadius: 2,
                          margin: '6px 8px',
                          padding: '12px 16px',
                          fontWeight: 500,
                          color: '#1f2937',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'background 0.2s, color 0.2s',
                          boxShadow: 'none',
                          minHeight: 48,
                          '&:hover, &:focus': {
                            background: '#f3f4f6',
                            color: '#6366f1',
                            outline: 'none',
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: '#6366f1', minWidth: 36, mr: 1 }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} sx={{ '.MuiListItemText-primary': { fontWeight: 500, fontSize: '1.05rem' } }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, width: '100%', justifyContent: 'center' }}>
              {navItems.map((item) => 
                renderNavButton(item.to, item.label, item.icon)
              )}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}