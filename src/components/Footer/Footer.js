import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
} from '@mui/icons-material';

const Footer = () => {
  const aboutLinks = [
    'HOME',
    'ABOUT US',
    'CONTACT US',
  ];

  const services = [
    'IPHONE APPLICATION DEVELOPMENT',
    'ANDROID APPLICATION DEVELOPMENT',
    'ENTERPRISE APP DEVELOPMENT',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#2D3748',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Appicoders Inc.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                  Tel: +1 (800) 826-8018
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Email: info@appicoders.com
                </Typography>
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                <IconButton
                  sx={{
                    backgroundColor: '#3B82F6',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      backgroundColor: '#2563EB',
                    },
                  }}
                >
                  <Facebook sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: '#1DA1F2',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      backgroundColor: '#1A91DA',
                    },
                  }}
                >
                  <Twitter sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: '#0077B5',
                    color: 'white',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      backgroundColor: '#005885',
                    },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* About Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 3,
              }}
            >
              About
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Appicoders Services
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    '&:hover': {
                      color: 'white',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  • {service}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 6,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              fontSize: '0.85rem',
            }}
          >
            © 2025 APPICODERS. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;