import { Box, Typography, Container, Paper, Chip, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person } from '@mui/icons-material';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LoopIcon from '@mui/icons-material/Loop';

const technologies = [
    "Unity", "C#", "Colyseus", "WebGL", "AWS", "Node.js", "TypeScript", "MongoDB"
];

const highlights = [
    { icon: <BuildIcon color="primary" />, text: "12+ major features shipped across games" },
    { icon: <SportsEsportsIcon color="secondary" />, text: "100,000+ players reached across all projects" },
    { icon: <LoopIcon color="success" />, text: "Led multiplayer server handling 100+ sessions concurrently" }
];

const bio: string[] = [
    "Hey, I'm Jilmer — a developer who loves turning game ideas into playable realities. I've worked across a variety of projects, from fast-paced PvP games on Telegram to space shooters with 50,000+ downloads. My favorite part of game dev is making things *feel* good — whether it's a snappy UI, satisfying combat, or smooth multiplayer.",
    
    "I mostly work with Unity, C#, and backend tools like Colyseus and AWS. I'm big on performance optimization, clean UI design, and shipping features that actually make a difference.",
    
    "When I’m not coding, you’ll probably find me lifting weights, reading about game balance theory, or exploring new indie titles for inspiration. I'm always learning and always building."
  ];
  

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
                        {bio.map((line, index) => (
                            <Typography key={index} variant="body1" color="#6b7280" sx={{ lineHeight: 1.8, fontSize: '1.1rem', textAlign: 'center' }}>
                                {line}
                            </Typography>
                        ))}
                    </Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 3, mb: 4, background: "rgba(99,102,241,0.05)" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: "#6366f1" }}>
                        Technologies I Use
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {technologies.map((tech) => (
                            <Chip key={tech} label={tech} color="primary" variant="outlined" />
                        ))}
                    </Box>
                </Paper>
                <Paper elevation={0} sx={{ p: 3, background: "rgba(16,185,129,0.05)" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: "#10b981" }}>
                        Highlights
                    </Typography>
                    <List>
                        {highlights.map((item, idx) => (
                            <ListItem key={idx}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </section>
    );
}