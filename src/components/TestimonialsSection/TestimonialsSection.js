import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E53E3E 0%, #C53030 100%)",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(rgba(229, 62, 62, 0.8), rgba(197, 48, 48, 0.8)), url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "white" }}>
              {/* Quote Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <FormatQuote sx={{ fontSize: 40, color: "white" }} />
              </Box>

              <Typography
                variant="overline"
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block",
                  opacity: 0.9,
                }}
              >
                CLIENT TESTIMONIALS
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                What our clients are Saying.
              </Typography>
            </Box>
          </Grid>

          {/* Right Content - Testimonial Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "white",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Client Info */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 2,
                      backgroundColor: "primary.main",
                    }}
                  >
                    SL
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "text.primary",
                        textDecoration: "underline",
                      }}
                    >
                      Scarlett Lawrence
                    </Typography>
                  </Box>
                </Box>

                {/* Quote Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#FFF5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormatQuote sx={{ fontSize: 20, color: "primary.main" }} />
                </Box>

                {/* Testimonial Text */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    mb: 3,
                  }}
                >
                  Thank you team Appicoders you guys have a great understanding
                  of what's needed and what things done very quickly compared to
                  others. Reliable communication and qualitative suggestions on
                  useful functionality during the planning stage made for a
                  first product that surpassed initial expectations. Their
                  Project management is amazing. Tight deadlines were reliably
                  met without issue. Our Strong recommendations if you're
                  looking for quality work.
                </Typography>

                {/* Progress Indicators */}
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 4,
                      backgroundColor: "primary.main",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 4,
                      backgroundColor: "#E2E8F0",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      width: 20,
                      height: 4,
                      backgroundColor: "#E2E8F0",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
