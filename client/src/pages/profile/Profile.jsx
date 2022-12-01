import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context/AuthContext";
import CustomTypography from "../../commons/custom-typography/CustomTypography";
import Navbar from "../../commons/navbar/Navbar";
import Footer from "../../commons/footer/Footer";
import "./Profile.css";

function Profile() {
  const { username, userLastname } = useContext(AuthContext);
  return (
    <div className="container">
      <Navbar />
      <Grid container direction="column">
        <Grid item>
          <CustomTypography variant="h3" sx={{ fontWeight: "bold" }}>
            {`${username} ${userLastname}`}
          </CustomTypography>
        </Grid>
        <Grid item>
          <ul className="profileOptions">
            <li>
              <Link to="/my-data">
                <div>
                  <CustomTypography variant="h6" sx={{ fontWeight: "bold" }}>
                    Mis datos
                  </CustomTypography>
                  <CustomTypography variant="body2">Valida tus datos</CustomTypography>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/address">
                <div>
                  <CustomTypography variant="h6" sx={{ fontWeight: "bold" }}>
                    Direcciones
                  </CustomTypography>
                  <CustomTypography variant="body2">
                    Modifica tus direcciones o agrega una nueva
                  </CustomTypography>
                </div>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Profile;
