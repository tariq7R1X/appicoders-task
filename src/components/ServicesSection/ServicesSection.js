import { Box, Container, Typography, Grid } from "@mui/material";
import { maskGroup } from "../../assets";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <rect
            x="25"
            y="15"
            width="50"
            height="70"
            rx="8"
            fill="white"
            stroke="none"
          />
          <rect x="30" y="25" width="40" height="50" rx="2" fill="#E53E3E" />
          <circle cx="50" cy="82" r="3" fill="white" />
        </Box>
      ),
      title: "Custom Mobile Applications",
      subtitle: "iOS, Android and Wearable Apps",
      color: "#E53E3E",
    },
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <circle cx="50" cy="50" r="35" fill="white" />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="#E53E3E"
            strokeWidth="3"
          />
          <path
            d="M35 35 L50 50 L65 35"
            fill="none"
            stroke="#E53E3E"
            strokeWidth="3"
          />
          <path
            d="M35 65 L50 50 L65 65"
            fill="none"
            stroke="#E53E3E"
            strokeWidth="3"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="#E53E3E"
            fontSize="12"
            fontWeight="bold"
          >
            AI
          </text>
        </Box>
      ),
      title: "Artificial Intelligence",
      subtitle: "Innovative AI & ML Solutions",
      color: "#E53E3E",
    },
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <rect x="15" y="25" width="70" height="50" rx="5" fill="white" />
          <rect x="20" y="30" width="60" height="35" fill="#E53E3E" />
          <circle cx="25" cy="35" r="2" fill="white" />
          <circle cx="30" cy="35" r="2" fill="white" />
          <circle cx="35" cy="35" r="2" fill="white" />
          <rect x="25" y="42" width="15" height="2" fill="white" />
          <rect x="25" y="46" width="20" height="2" fill="white" />
          <rect x="25" y="50" width="18" height="2" fill="white" />
          <rect x="25" y="54" width="22" height="2" fill="white" />
          <path d="M50 42 L60 47 L70 42 L70 57 L60 52 L50 57 Z" fill="white" />
        </Box>
      ),
      title: "Custom Web Development",
      subtitle: "Robust Webs, Progressive Web Apps",
      color: "#E53E3E",
    },
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <rect x="20" y="20" width="25" height="25" rx="3" fill="white" />
          <rect x="55" y="20" width="25" height="25" rx="3" fill="white" />
          <rect x="20" y="55" width="25" height="25" rx="3" fill="white" />
          <rect x="55" y="55" width="25" height="25" rx="3" fill="white" />
          <circle cx="32.5" cy="32.5" r="8" fill="#E53E3E" />
          <circle cx="67.5" cy="32.5" r="8" fill="#E53E3E" />
          <circle cx="32.5" cy="67.5" r="8" fill="#E53E3E" />
          <circle cx="67.5" cy="67.5" r="8" fill="#E53E3E" />
          <path d="M40 32.5 L55 32.5" stroke="white" strokeWidth="2" />
          <path d="M32.5 40 L32.5 55" stroke="white" strokeWidth="2" />
          <path d="M40 67.5 L55 67.5" stroke="white" strokeWidth="2" />
          <path d="M67.5 40 L67.5 55" stroke="white" strokeWidth="2" />
        </Box>
      ),
      title: "Blockchain Development",
      subtitle: "Custom Blockchain Solutions",
      color: "#E53E3E",
    },
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <polygon points="30,20 70,20 80,35 70,50 30,50 20,35" fill="white" />
          <polygon
            points="35,25 65,25 72,35 65,45 35,45 28,35"
            fill="#E53E3E"
          />
          <text
            x="50"
            y="38"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            AR
          </text>
          <circle cx="25" cy="65" r="8" fill="white" />
          <circle cx="50" cy="75" r="8" fill="white" />
          <circle cx="75" cy="65" r="8" fill="white" />
          <path d="M30 60 L45 70" stroke="white" strokeWidth="2" />
          <path d="M55 70 L70 60" stroke="white" strokeWidth="2" />
        </Box>
      ),
      title: "Augmented Reality",
      subtitle: "Futuristic AR Apps",
      color: "#E53E3E",
    },
    {
      icon: (
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{ width: 40, height: 40 }}
        >
          <rect x="15" y="35" width="70" height="40" rx="5" fill="white" />
          <rect x="20" y="40" width="60" height="25" fill="#E53E3E" />
          <circle cx="30" cy="45" r="2" fill="white" />
          <circle cx="35" cy="45" r="2" fill="white" />
          <circle cx="40" cy="45" r="2" fill="white" />
          <rect x="30" y="52" width="8" height="1" fill="white" />
          <rect x="30" y="55" width="12" height="1" fill="white" />
          <rect x="30" y="58" width="10" height="1" fill="white" />
          <text
            x="65"
            y="58"
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="bold"
          >
            MVP
          </text>
          <rect x="45" y="75" width="10" height="8" fill="white" />
        </Box>
      ),
      title: "MVP Development",
      subtitle: "For Startups & Entrepreneurs",
      color: "#E53E3E",
    },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #2D3748 100%)",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "white" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Our Services
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Get to know about what we're good at.
              </Typography>

              {/* Services Grid */}
              <Grid container spacing={3}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.15)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          backgroundColor: service.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            mb: 0.5,
                            color: "white",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.85rem",
                            opacity: 0.8,
                            color: "white",
                          }}
                        >
                          {service.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Content - Services Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                position: "relative",
                minHeight: 400,
                pr: { md: 2 }, // Add padding right on desktop
              }}
            >
              <Box
                component="img"
                src={maskGroup}
                alt="Our Services"
                sx={{
                  width: { xs: "90%", md: "100%" },
                  height: "auto",
                  maxWidth: 500,
                  filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.2))",
                  animation: "float 8s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
