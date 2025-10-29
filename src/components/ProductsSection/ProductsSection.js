import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
} from '@mui/material';

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['ALL', 'Health Supreme', 'CRM 365', 'OSDA', 'Marketplace E-Commerce Platform', 'Sports Training App', 'Fitness'];

  const products = [
    {
      title: 'Dashboard Analytics',
      image: '/api/placeholder/300/200',
      category: 'Web Application',
    },
    {
      title: 'E-Commerce Platform',
      image: '/api/placeholder/300/200',
      category: 'Mobile & Web',
    },
    {
      title: 'Mobile Banking App',
      image: '/api/placeholder/300/200',
      category: 'Mobile Application',
    },
    {
      title: 'Health Tracking App',
      image: '/api/placeholder/300/200',
      category: 'Mobile Application',
      featured: true,
    },
    {
      title: 'AR Experience App',
      image: '/api/placeholder/300/200',
      category: 'Augmented Reality',
    },
    {
      title: 'Gaming Platform',
      image: '/api/placeholder/300/200',
      category: 'Web Application',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #E53E3E 0%, #C53030 100%)',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        }}
      />

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              color: 'white',
            }}
          >
            Products
          </Typography>

          {/* Tabs */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  minWidth: 'auto',
                  px: 2,
                  '&.Mui-selected': {
                    color: 'white',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: 'white',
                  height: 3,
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab key={index} label={tab} />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {/* Product Image */}
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: product.featured ? '#2D3748' : '#F7FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {product.featured ? (
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        Health Supreme
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mi condimentum
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: '80%',
                        height: '80%',
                        backgroundColor: '#E2E8F0',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {product.title}
                      </Typography>
                    </Box>
                  )}
                </Box>

                {!product.featured && (
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.85rem',
                      }}
                    >
                      {product.category}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSection;