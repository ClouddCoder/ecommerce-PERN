import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Form from "../../components/form/Form";
import AuthContext from "../../context/auth-context/AuthContext";
import useError from "../../utils/hooks/useError";
import { loginUser } from "../../services/user";

/**
 * This component renders the login form
 */
function Login() {
  const { error, setInputError } = useError();
  const {
    setAuth,
    setUserId,
    setUser,
    setUsername,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    setToken,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  /**
   * Send the user's data to the server
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(userEmail, userPassword);
      const data = await res.json();

      // Sets the user's data to login and deletes the data from the inputs
      if (res.ok) {
        setAuth(data.isAuth);
        setUserId(data.userId);
        setUser(data.userName);
        setUsername(data.username);
        setToken(data.token);
        setUserEmail("");
        setUserPassword("");
        navigate("/");

        // Saves the token to localStorasge
        window.localStorage.setItem("logged", JSON.stringify(data));
      } else {
        setInputError({ ...error, constraint: "incorrecto", message: data.message });
        throw new Error(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Gets the email and password from the inputs
   */
  const handleChange = (e) => {
    setInputError({ ...error, constraint: "", message: "" });

    switch (e.target.name) {
      case "userEmail":
        setUserEmail(e.target.value);
        break;
      case "userPassword":
        setUserPassword(e.target.value);
        break;
      default:
    }
  };

  return (
    <Form title="Iniciar sesión">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              error={error.constraint === "incorrecto"}
              helperText={error.message}
              onChange={handleChange}
              name="userEmail"
              variant="outlined"
              label="Email"
              value={userEmail}
              sx={{ margin: ".5rem 0", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={error.constraint === "incorrecto"}
              helperText={error.message}
              onChange={handleChange}
              name="userPassword"
              variant="outlined"
              label="Password"
              type="password"
              value={userPassword}
              sx={{ margin: ".5rem 0", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" type="submit" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid container item justifyContent="space-between" xs={12}>
            <Grid item>
              <Link to="/edit-password">
                <span>Forgot password?</span>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register">
                <span>Do not have an account? Sign Up</span>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Form>
  );
}

export default Login;
