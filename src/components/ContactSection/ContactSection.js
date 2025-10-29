import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Phone } from '@mui/icons-material';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #2D3748 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="stretch">
          {/* Left Content - Contact Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', height: '100%' }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block',
                  opacity: 0.9,
                }}
              >
                LET'S TALK
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Got an idea? Let's get in touch!
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: '1rem',
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
              </Typography>

              {/* Contact Form */}
              <Box component="form" onSubmit={handleSubmit} sx={{ space: 3 }}>
                <TextField
                  fullWidth
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name="message"
                  placeholder="Message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    backgroundColor: '#A02626',
                    color: 'white',
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#8B1F1F',
                    },
                  }}
                >
                  LET'S GET IN TOUCH
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Contact Info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Top Image Section */}
              <Box
                sx={{
                  height: '60%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  mb: 3,
                  background: 'linear-gradient(145deg, #4A5568, #2D3748)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Placeholder for team image */}
                <Box
                  sx={{
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: 'white', fontSize: '1.2rem' }}>
                    Team Collaboration
                  </Typography>
                </Box>
              </Box>

              {/* Bottom Contact Card */}
              <Card
                sx={{
                  backgroundColor: '#2D3748',
                  color: 'white',
                  borderRadius: 3,
                  height: '35%',
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      opacity: 0.9,
                      fontSize: '0.9rem',
                    }}
                  >
                    Please submit your inquiry and our App Development Strategist will contact you shortly
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Phone sx={{ fontSize: 30, mr: 1 }} />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '1.8rem',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    +1-(800) 826 8018
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.7,
                      fontSize: '0.85rem',
                    }}
                  >
                    info@appicoders.com
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;