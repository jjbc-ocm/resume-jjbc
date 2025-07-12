import {
    Typography,
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container
} from '@mui/material';
import {
    ExpandMore,
    Business
} from '@mui/icons-material';
import projectsData from '../../data/projects.json';
import { Project } from './Project';


export default function Projects() {

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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
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
                            <Project
                                project={project}
                                projectIndex={projectIndex}
                                totalProjects={client.projects.length}
                            />
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