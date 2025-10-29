import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { mobileMockup } from '../../assets';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#E53E3E',
      }}
    >
      {/* Curved Background Design */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          background: '#2D3748',
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content - Mobile Mockup */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                minHeight: 600,
              }}
            >
              <Box
                component="img"
                src={mobileMockup}
                alt="Mobile App Mockup"
                sx={{
                  width: { xs: '80%', md: '90%' },
                  height: 'auto',
                  maxWidth: 400,
                  filter: 'drop-shadow(0 25px 80px rgba(0,0,0,0.3))',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Right Content - Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', pl: { md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Leading the Way in App Development Innovation
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#A02626',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 1,
                  textTransform: 'uppercase',
                  '&:hover': {
                    backgroundColor: '#8B1F1F',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                GET A FREE QUOTE
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Navigation Arrows */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;