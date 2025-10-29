import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const AwardsSection = () => {
  const awards = [
    {
      title: "IT Firms",
      subtitle: "Top Web Development Companies",
      logo: "🏆",
      color: "#0066CC",
    },
    {
      title: "Top Mobile App Developers 2020",
      subtitle:
        "Top Developers mentioned us in their top app development companies in the USA list",
      logo: "👑",
      color: "#2D3748",
      featured: true,
    },
    {
      title: "Clutch",
      subtitle: "Alberta Canada",
      logo: "⭐",
      color: "#4A5568",
    },
    {
      title: "Top Mobile App Development Companies",
      subtitle: "appfutura",
      logo: "🚀",
      color: "#E53E3E",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#F7FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "text.primary",
            }}
          >
            Awards and Recognitions
          </Typography>
        </Box>

        {/* Awards Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {awards.map((award, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: award.featured ? "50%" : 3,
                  backgroundColor: award.featured ? award.color : "white",
                  color: award.featured ? "white" : "text.primary",
                  boxShadow: award.featured
                    ? "0 20px 60px rgba(45, 55, 72, 0.2)"
                    : "0 8px 30px rgba(0,0,0,0.08)",
                  minHeight: award.featured ? 250 : 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: award.featured
                      ? "0 25px 80px rgba(45, 55, 72, 0.3)"
                      : "0 15px 50px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Logo/Icon */}
                <Typography
                  sx={{
                    fontSize: award.featured ? "4rem" : "3rem",
                    mb: 2,
                  }}
                >
                  {award.logo}
                </Typography>

                {/* Title */}
                <Typography
                  variant={award.featured ? "h5" : "h6"}
                  sx={{
                    fontSize: award.featured ? "1.25rem" : "1rem",
                    fontWeight: 600,
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {award.title}
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.85rem",
                    opacity: award.featured ? 0.9 : 0.7,
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {award.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AwardsSection;
