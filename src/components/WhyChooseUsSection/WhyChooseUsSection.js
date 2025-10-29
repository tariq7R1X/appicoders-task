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
  Business,
  Group,
  Payment,
} from '@mui/icons-material';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Business sx={{ fontSize: 50, color: '#718096' }} />,
      title: 'Focused Business Approach',
      description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
    },
    {
      icon: <Group sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Professional Team',
      description: 'Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & webapp platforms.',
      featured: true,
    },
    {
      icon: <Payment sx={{ fontSize: 50, color: '#718096' }} />,
      title: 'Flexible Payment Terms',
      description: 'Get your apps developed with most affordable price and with our flexible payment terms, you pay for your project progresses.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#F7FAFC' }}>
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
            Why Choose Us?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            With our unique approach and cost-effective solutions, your business will prosper because quality is the top priority for us.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: feature.featured 
                    ? '0 20px 60px rgba(229, 62, 62, 0.15)' 
                    : '0 8px 30px rgba(0,0,0,0.08)',
                  border: feature.featured ? '2px solid' : 'none',
                  borderColor: feature.featured ? 'primary.main' : 'transparent',
                  transform: feature.featured ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: feature.featured ? 'scale(1.08)' : 'scale(1.03)',
                    boxShadow: feature.featured 
                      ? '0 25px 80px rgba(229, 62, 62, 0.2)' 
                      : '0 15px 50px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      backgroundColor: feature.featured ? 'primary.main' : '#E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {React.cloneElement(feature.icon, {
                      sx: {
                        fontSize: 50,
                        color: feature.featured ? 'white' : '#718096',
                      },
                    })}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {feature.description}
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

export default WhyChooseUsSection;