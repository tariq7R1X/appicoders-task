import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocalHospital,
  FitnessCenter,
  AccountBalance,
  FavoriteBorder,
  BusinessCenter,
  CleaningServices,
} from '@mui/icons-material';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <LocalHospital sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Medical & Pharma Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
    {
      icon: <FitnessCenter sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Training & Fitness',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
      featured: true,
    },
    {
      icon: <AccountBalance sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Fintech',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
    {
      icon: <FavoriteBorder sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Health & Fitness',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Business & Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
    {
      icon: <CleaningServices sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Cleaning Services',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Industries
          </Typography>
        </Box>

        {/* Industries Grid */}
        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: industry.featured ? '2px solid' : '1px solid',
                  borderColor: industry.featured ? 'primary.main' : '#E2E8F0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 2,
                      backgroundColor: '#FFF5F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {industry.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {industry.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {industry.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustriesSection;