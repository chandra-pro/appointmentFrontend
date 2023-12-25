import React from "react";
import { Avatar, Typography, Grid, Paper, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import FAQSection from "./FAQItem";

const DoctorProfile = () => {
  return (
    <>
      <Box p={10}>
        <Paper elevation={5} style={{ padding: "15px" }}>
          <Grid container spacing={6} alignItems="center">
            {/* Doctor Avatar */}
            <Grid item>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </Grid>

            {/* Doctor Information */}
            <Grid item xs={8}>
              <Typography variant="h4">Dr. John Doe</Typography>
              <Typography variant="subtitle1">Occupation: Physician</Typography>
              <Typography variant="subtitle1">
                Clinic: XYZ Medical Center
              </Typography>
              <Typography variant="subtitle1">
                Speciality: Internal Medicine
              </Typography>
            </Grid>

            {/* Work Icon */}
            <Grid item xs={2}>
              <WorkIcon fontSize="large" />
            </Grid>
          </Grid>

          {/* Additional Information Section */}
          <Box mt={4}>
            <Typography variant="h5">Additional Information</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Paper>
      </Box>
      <FAQSection />
    </>
  );
};

export default DoctorProfile;
