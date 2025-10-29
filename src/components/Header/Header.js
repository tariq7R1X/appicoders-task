import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Phone } from '@mui/icons-material';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'HOME', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Products', id: 'products' },
    { label: 'Testimonial', id: 'testimonial' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <Box
          component="svg"
          viewBox="0 0 400 80"
          sx={{
            height: 40,
            width: 'auto',
          }}
        >
          <path
            d="M20 65 L40 20 L60 65 L50 65 L40 45 L30 65 Z"
            fill="#E53E3E"
          />
          <path
            d="M45 35 L70 45 L45 50 Z"
            fill="#E53E3E"
          />
          <text
            x="85"
            y="50"
            fill="#E53E3E"
            fontSize="28"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="400"
          >
            ppicoders Inc.
          </text>
        </Box>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            disablePadding
            onClick={() => scrollToSection(item.id)}
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(229, 62, 62, 0.1)',
              }
            }}
          >
            <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'primary.main',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
            <Box
              component="svg"
              viewBox="0 0 400 80"
              sx={{
                height: { xs: 35, md: 40 },
                width: 'auto',
              }}
            >
              <path
                d="M20 65 L40 20 L60 65 L50 65 L40 45 L30 65 Z"
                fill="white"
              />
              <path
                d="M45 35 L70 45 L45 50 Z"
                fill="white"
              />
              <text
                x="85"
                y="50"
                fill="white"
                fontSize="28"
                fontFamily="Inter, Arial, sans-serif"
                fontWeight="400"
              >
                ppicoders Inc.
              </text>
            </Box>
          </Box>

          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexGrow: 1,
              gap: 1
            }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    px: 1.5,
                    py: 1,
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side - Phone Number */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexGrow: 0 }}>
            {!isMobile && (
              <Button
                variant="outlined"
                startIcon={<Phone />}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: '20px',
                  px: 2,
                  py: 0.5,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                +1 (800) 826-8018
              </Button>
            )}
            
            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;