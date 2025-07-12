import { Launch, Star } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Button } from "../ui/Button";
import { Tools } from "./Tools";
import { Metrics } from "./Metrics";
import { Responsibilities } from "./Responsibilities";

interface IProps {
    project: any;
    projectIndex: number;
    totalProjects: number;
}

export const Project = (props: IProps) => {
    // If there's only one project, make it full width; otherwise use half width on medium+ screens
    const gridSize = props.totalProjects === 1 ? { xs: 12 } : { xs: 12, md: 6 };

    return (
        <Grid size={gridSize} key={props.projectIndex}>
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
                            {props.project.name}
                        </Typography>
                    </Box>

                    <Typography variant="body1" color="#6b7280" paragraph sx={{ mb: 3, lineHeight: 1.6 }}>
                        {props.project.description}
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
                            {props.project.role}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: 'rgba(0,0,0,0.08)' }} />

                    <Tools tools={props.project.tools} />
                    <Metrics metrics={props.project.metrics} />
                    <Responsibilities responsibilities={props.project.responsibilities} />
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                    {props.project.url && (
                        <Button
                            variant="project"
                            size="medium"
                            startIcon={<Launch />}
                            href={props.project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Grid>
    );
}