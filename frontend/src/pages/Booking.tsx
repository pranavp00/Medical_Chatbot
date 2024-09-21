import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Footer from "../components/footer/Footer";
import { useTheme, useMediaQuery } from "@mui/material";

// Define a type for the doctor object
interface Doctor {
  name: string;
  specialization: string;
  hospital: string;
  location: string;
  profileLink: string;
}

const Booking = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  // States for search and booking input
  const [disease, setDisease] = useState("");
  const [location, setLocation] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]); // Update doctorsList type to Doctor[]

  // Search doctors based on disease and location
  const handleSearch = async () => {
    // Simulated doctor list
    const simulatedDoctors: Doctor[] = [
      {
        name: "Dr. Indu Bubna",
        specialization: "Pulmonologist",
        hospital: "Lung Care Clinic",
        location: "Malad West, Mumbai",
        profileLink: "https://www.practo.com/mumbai/doctor/dr-indu-bubna-pulmonologist?practice_id=1130035&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306"
      },
      {
        name: "Dr. Avya Bansal",
        specialization: "Pulmonologist",
        hospital: "Lung Care Clinic",
        location: "Bandra West, Mumbai",
        profileLink: "https://www.practo.com/mumbai/doctor/avya-bansal-pulmonologist?practice_id=1304929&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306"
      },
      {
        name: "Dr. Harish Chafle",
        specialization: "Pulmonologist",
        hospital: "Gleneagles Hospitals",
        location: "Parel, Mumbai",
        profileLink: "https://www.practo.com/mumbai/doctor/dr-harish-chafle-pulmonologist?practice_id=982258&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306"
      },
      {
        name: "Dr. Sarthak Rastogi",
        specialization: "Pulmonologist",
        hospital: "Sushrut Hospital and Research Center",
        location: "Chembur East, Mumbai",
        profileLink: "https://www.practo.com/mumbai/doctor/dr-sarthak-a-rastogi-pulmonologist?practice_id=611951&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306"
      },
      {
        name: "Dr. Hemil Jasani",
        specialization: "Pulmonologist",
        hospital: "Inspire Lungs and Eye Clinic",
        location: "Chembur East, Mumbai",
        profileLink: "https://www.practo.com/mumbai/doctor/hemil-jasani-pulmonologist?practice_id=1413378&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306"
      },
    ];
    
    setDoctorsList(simulatedDoctors);
  };

  // Booking function to redirect to Practo profile
  const handleBooking = () => {
    if (doctorName) {
      // Redirect to Practo profile URL
      window.location.href = `https://www.practo.com/mumbai/doctor/hemil-jasani-pulmonologist?practice_id=1413378&specialization=Tuberculosis&referrer=doctor_listing&page_uid=0d1eae88-77b1-4b8c-91f9-229c9a3799bf&category_name=symptom&category_id=306`;
    }
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        {/* Search Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 5,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Search for Doctors
          </Typography>
          <TextField
            label="Disease"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              bgcolor: "#00fffc",
              color: "black",
              transition: "0.3s",
              ":hover": {
                bgcolor: "#00fffc",
                transform: 'scale(1.1)',
                boxShadow: `0px 4px 15px rgba(0, 255, 252, 0.7)`,
              },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Displaying List of Doctors */}
        {doctorsList.length > 0 && (
          <Box
            sx={{
              width: "100%",
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Doctors Found
            </Typography>
            {doctorsList.map((doctor, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: isBelowMd ? "80%" : "40%",
                  padding: "10px",
                  boxShadow: "5px 5px 15px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  //backgroundColor: "#f9f9f9",
                }}
              >
                <Typography variant="body1">
                  <strong>Name:</strong> {doctor.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Specialization:</strong> {doctor.specialization}
                </Typography>
                <Typography variant="body1">
                  <strong>Hospital:</strong> {doctor.hospital}
                </Typography>
                <Typography variant="body1">
                  <strong>Location:</strong> {doctor.location}
                </Typography>
                <Typography variant="body1">
                <a href={doctor.profileLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00fffc', textDecoration: 'underline' }}>https://www.practo.com/mumbai/{doctor.name}
          </a>
          </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Booking Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 5,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Book an Appointment
          </Typography>
          <TextField
            label="Doctor Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            sx={{ width: isBelowMd ? "80%" : "40%" }}
            InputProps={{
                style: {
                  color: 'white',
                },
              }}
          />
          <Button
            variant="contained"
            onClick={handleBooking}
            sx={{
                bgcolor: "#00fffc",
                color: "black",
                transition: "0.3s",
                ":hover": {
                  bgcolor: "#00fffc",
                  transform: 'scale(1.1)',
                  boxShadow: `0px 4px 15px rgba(0, 255, 252, 0.7)`,
              },
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Booking;
