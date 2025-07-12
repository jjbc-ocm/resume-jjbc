import { 
    Card, 
    CardContent, 
    CardActions, 
    Typography, 
    Chip, 
    Box, 
    Grid, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Button,
    List,
    ListItem,
    ListItemText,
    Container,
    Divider,
    Paper
} from '@mui/material';
import { 
    ExpandMore, 
    Launch, 
    Code, 
    TrendingUp, 
    Work, 
    Business,
    Star
} from '@mui/icons-material';
import projectsData from '../data/projects.json';

export default function Projects() {
    const renderTools = (tools: string[]) => {
        if (!tools || tools.length === 0) return null;
        
        return (
            <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Code sx={{ fontSize: 16, mr: 1, color: '#6366f1' }} />
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                        Technologies
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {tools.map((tool, toolIndex) => (
                        <Chip 
                            key={toolIndex} 
                            label={tool} 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                                borderColor: '#6366f1',
                                color: '#6366f1',
                                backgroundColor: 'rgba(99, 102, 241, 0.05)',
                                '&:hover': {
                                    backgroundColor: '#6366f1',
                                    color: 'white'
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>
        );
    };

    const renderMetrics = (metrics: Array<{ type: string; value: string }>) => {
        if (!metrics || metrics.length === 0) return null;
        
        return (
            <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUp sx={{ fontSize: 16, mr: 1, color: '#10b981' }} />
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                        Key Achievements
                    </Typography>
                </Box>
                <Paper elevation={0} sx={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.08)', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    p: 2, 
                    borderRadius: 2 
                }}>
                    <List dense sx={{ py: 0 }}>
                        {metrics.map((metric, metricIndex) => (
                            <ListItem key={metricIndex} sx={{ py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                                            {metric.value}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600 }}>
                                            {metric.type}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        );
    };

    const renderResponsibilities = (responsibilities: string[]) => {
        if (!responsibilities || responsibilities.length === 0) return null;
        
        return (
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Work sx={{ fontSize: 16, mr: 1, color: '#8b5cf6' }} />
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                        Responsibilities
                    </Typography>
                </Box>
                <Paper elevation={0} sx={{ 
                    backgroundColor: 'rgba(139, 92, 246, 0.08)', 
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    p: 2, 
                    borderRadius: 2 
                }}>
                    <List dense sx={{ py: 0 }}>
                        {responsibilities.map((responsibility, respIndex) => (
                            <ListItem key={respIndex} sx={{ py: 0.5, px: 0 }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                            • {responsibility}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        );
    };

    const renderProjectCard = (project: any, projectIndex: number, totalProjects: number) => {
        // If there's only one project, make it full width; otherwise use half width on medium+ screens
        const gridSize = totalProjects === 1 ? { xs: 12 } : { xs: 12, md: 6 };
        
        return (
            <Grid size={gridSize} key={projectIndex}>
                <Card 
                    sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                        },
                        border: '1px solid',
                        borderColor: 'rgba(0,0,0,0.08)',
                        borderRadius: 3,
                        backgroundColor: 'white'
                    }}
                >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Star sx={{ color: '#f59e0b', mr: 1 }} />
                            <Typography variant="h5" component="h4" sx={{ fontWeight: 700, color: '#1f2937' }}>
                                {project.name}
                            </Typography>
                        </Box>
                        
                        <Typography variant="body1" color="#6b7280" paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
                            {project.description}
                        </Typography>
                        
                        <Box sx={{ 
                            display: 'inline-block', 
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', 
                            color: 'white', 
                            px: 2, 
                            py: 0.5, 
                            borderRadius: 2,
                            mb: 3
                        }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                {project.role}
                            </Typography>
                        </Box>
                        
                        <Divider sx={{ my: 2, borderColor: 'rgba(0,0,0,0.08)' }} />
                        
                        {renderTools(project.tools)}
                        {renderMetrics(project.metrics)}
                        {renderResponsibilities(project.responsibilities)}
                    </CardContent>
                    
                    <CardActions sx={{ p: 3, pt: 0 }}>
                        {project.url && (
                            <Button 
                                variant="contained"
                                size="medium" 
                                startIcon={<Launch />}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ 
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    px: 3,
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)'
                                    }
                                }}
                            >
                                View Project
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Grid>
        );
    };

    const renderClientAccordion = (client: any, clientIndex: number) => {
        return (
            <Accordion 
                key={clientIndex} 
                sx={{ 
                    mb: 3,
                    borderRadius: 3,
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    backgroundColor: 'white',
                    '&.Mui-expanded': {
                        boxShadow: '0 4px 20px rgba(0,0,0,0.12)'
                    }
                }}
            >
                <AccordionSummary 
                    expandIcon={<ExpandMore sx={{ color: '#6366f1' }} />}
                    sx={{ 
                        backgroundColor: 'white',
                        borderRadius: 3,
                        '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.02)'
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Business sx={{ mr: 2, color: '#6366f1' }} />
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#1f2937' }}>
                                {client.client}
                            </Typography>
                        </Box>
                        <Typography 
                            variant="body2" 
                            color="#6b7280"
                            sx={{ 
                                backgroundColor: 'rgba(99, 102, 241, 0.08)', 
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                px: 2, 
                                py: 0.5, 
                                borderRadius: 2,
                                fontWeight: 500
                            }}
                        >
                            {client.duration}
                        </Typography>
                    </Box>
                </AccordionSummary>
                
                <AccordionDetails sx={{ p: 3, backgroundColor: '#fafafa' }}>
                    <Grid container spacing={3}>
                        {client.projects.map((project: any, projectIndex: number) => 
                            renderProjectCard(project, projectIndex, client.projects.length)
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        );
    };

    return (
        <section id="projects" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", 
            padding: "80px 0" 
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography 
                        variant="h2" 
                        component="h2" 
                        sx={{ 
                            fontWeight: 800, 
                            color: '#1f2937',
                            mb: 2,
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Projects
                    </Typography>
                    <Typography variant="h6" color="#6b7280" sx={{ fontWeight: 400 }}>
                        A showcase of my professional work and achievements
                    </Typography>
                </Box>
                
                {projectsData.map((client, clientIndex) => 
                    renderClientAccordion(client, clientIndex)
                )}
            </Container>
        </section>
    );
}