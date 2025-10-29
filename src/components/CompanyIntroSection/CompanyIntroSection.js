import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

const CompanyIntroSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: "#FFFFFF", // white background
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Heading */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
                color: "text.primary",
              }}
            >
              <Box component="span" sx={{ color: "primary.main" }}>
                Appicoders
              </Box>{" "}
              – #1. Mobile App & Web Development Company in USA
            </Typography>
          </Grid>

          {/* Right Side - Text & Button */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Welcome to Appicoders, your trusted partner for expert mobile app
              and web development. With over 10+ years of experience, we
              specialize in designing, developing, and marketing cutting-edge
              solutions for all major mobile platforms, including Android, iOS,
              and Windows.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#A02626",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 1,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#8B1F1F",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              READ MORE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyIntroSection;
