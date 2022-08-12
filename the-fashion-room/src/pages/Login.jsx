import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context/AuthContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Ingresar() {
  const [email, setEmail] = useState({ email: "" });
  const [password, setPasswordLog] = useState({ password: "" });
  const { setAuth, setUserName, setUserId } = useContext(AuthContext);
  const [error, setError] = useState({ error: false, errorMessage: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(email, password),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (res.status === 200) {
      setAuth(true);
      setUserId(data.id);
      setUserName(data.name);
      navigate("/catalogue");
    } else {
      setError({ error: true, errorMessage: data.message });
    }
  };

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
    setPasswordLog({ ...password, [e.target.name]: e.target.value });
  };

  return (
    <Grid container direction="column" align="center">
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item={true} container direction="column" pt={15} pb={25}>
        <Grid item>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Inicia sesion
              </Typography>
            </CardContent>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  error={error.error}
                  helperText={error.errorMessage}
                  onChange={handleChange}
                  name="email"
                  variant="filled"
                  label="Email"
                  sx={{ margin: ".5rem 0" }}
                />
                <TextField
                  error={error.error}
                  helperText={error.errorMessage}
                  onChange={handleChange}
                  name="password"
                  variant="filled"
                  label="Password"
                  type="password"
                  sx={{ margin: ".5rem 0" }}
                />
                <CardContent>
                  <Button variant="contained" color="secondary" type="submit">
                    Login
                  </Button>
                </CardContent>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid>
          <Button component={Link} variant="contained" to="/" color="primary">
            Regresar
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Ingresar;
