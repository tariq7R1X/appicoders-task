import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const TechnologiesSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              color: 'white',
            }}
          >
            Technologies
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          {/* Left Content - Cloud Solutions */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: 'white',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                height: '100%',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Cloud Solutions
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 4,
                    fontSize: '1rem',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper 
                  quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. 
                  Sed felis sapien, rutrum ut tempus quis, elementum eu dui.
                </Typography>

                {/* Progress Indicators */}
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 4,
                      backgroundColor: 'primary.main',
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 4,
                      backgroundColor: '#E2E8F0',
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 4,
                      backgroundColor: '#E2E8F0',
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Content - 3D Visualization */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 400,
                position: 'relative',
              }}
            >
              {/* 3D Cloud Visualization */}
              <Box
                sx={{
                  width: { xs: 300, md: 400 },
                  height: { xs: 300, md: 400 },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Central Cloud */}
                <Box
                  sx={{
                    width: 200,
                    height: 120,
                    background: 'linear-gradient(145deg, #00D4FF, #0099CC)',
                    borderRadius: '60px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 60px rgba(0, 212, 255, 0.3)',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.05)' },
                    },
                  }}
                >
                  {/* Cloud Icon */}
                  <Typography
                    sx={{
                      fontSize: '3rem',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    ☁
                  </Typography>
                </Box>

                {/* Floating Data Points */}
                {[...Array(8)].map((_, index) => {
                  const angle = (index * 45) * (Math.PI / 180);
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        width: 12,
                        height: 12,
                        backgroundColor: '#00D4FF',
                        borderRadius: '50%',
                        animation: `float${index} 3s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                        '@keyframes float0': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x + 10}px), calc(-50% + ${y - 10}px))` },
                        },
                        '@keyframes float1': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x - 10}px), calc(-50% + ${y + 10}px))` },
                        },
                        '@keyframes float2': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x + 15}px), calc(-50% + ${y}px))` },
                        },
                        '@keyframes float3': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y - 15}px))` },
                        },
                        '@keyframes float4': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x - 10}px), calc(-50% + ${y - 10}px))` },
                        },
                        '@keyframes float5': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x + 10}px), calc(-50% + ${y + 10}px))` },
                        },
                        '@keyframes float6': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x - 15}px), calc(-50% + ${y}px))` },
                        },
                        '@keyframes float7': {
                          '0%, 100%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` },
                          '50%': { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y + 15}px))` },
                        },
                      }}
                    />
                  );
                })}

                {/* Connection Lines */}
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                  }}
                >
                  {[...Array(4)].map((_, index) => {
                    const angle = (index * 90) * (Math.PI / 180);
                    const radius = 150;
                    const x1 = 200 + Math.cos(angle) * 60;
                    const y1 = 200 + Math.sin(angle) * 30;
                    const x2 = 200 + Math.cos(angle) * radius;
                    const y2 = 200 + Math.sin(angle) * radius;
                    
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#00D4FF"
                        strokeWidth="2"
                        opacity="0.3"
                        strokeDasharray="5,5"
                      />
                    );
                  })}
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;