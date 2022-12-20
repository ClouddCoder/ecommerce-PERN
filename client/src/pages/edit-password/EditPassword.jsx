import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Layout from "../../components/layout/Layout";
import { changeUserPassword, getUserId } from "../../services/user";
import useUserInput from "../../hooks/useUserInput";
import usePasswordLength from "../../hooks/usePasswordLength";
import useError from "../../hooks/useError";
import "./EditPassword.css";

function EditPassword() {
  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState(false); // If the user's email exists, turns true.
  const { error, setInputError } = useError();
  const userEmail = useUserInput();
  const userCurrentPassword = useUserInput();
  const userNewPassword = useUserInput();
  const { password, checkPasswordLength } = usePasswordLength();
  const navigate = useNavigate();

  // Sends the user's new password to change the current one using the user's id.
  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    if (!password.shortPassword) {
      try {
        await changeUserPassword(userId, userCurrentPassword.input, userNewPassword.input);
        console.log("Contraseña actualizada");
        navigate("/");
      } catch (err) {
        const { response } = err;
        const { data } = response;
        const { message, constraint } = data;
        setInputError({ constraint, message });
      }
    }
  };

  // Sends the user's email to check if it exists in the database.
  // If it does, the function will return the user's id.
  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await getUserId(userEmail.input);

      const { data } = res;
      setUserId(data.userId);
      setSuccess(true);
    } catch (err) {
      const { response } = err;
      const { data } = response;
      const { message } = data;
      setInputError({ constraint: "email", message });
    }
  };

  const handleChange = (e) => {
    setInputError({ constraint: "", message: "" });
    switch (e.target.name) {
      case "email":
        userEmail.setUserInput(e.target.value);
        break;
      case "currentPassword":
        userCurrentPassword.setUserInput(e.target.value);
        break;
      case "newPassword":
        if (e.target.value.length <= 4) {
          checkPasswordLength({
            shortPassword: true,
            errorMessage: "La contraseña debe tener más de 4 caracteres",
          });
        } else {
          checkPasswordLength({ shortPassword: false, errorMessage: "" });
        }
        userNewPassword.setUserInput(e.target.value);
        break;
      default:
    }
  };

  return (
    <Layout>
      <div className={`email-input ${success && "email-input--hidden"}`}>
        <div className="email-input__title">
          <h1>Escribe tu correo</h1>
        </div>
        <form onSubmit={handleSubmitEmail}>
          <TextField
            error={error.constraint === "email"}
            helperText={error.constraint === "email" && error.errorMessage}
            onChange={handleChange}
            name="email"
            variant="outlined"
            label="Email"
            value={userEmail.input}
            sx={{ margin: ".5rem 0", width: "100%" }}
          />
          <Button variant="contained" color="secondary" type="submit" fullWidth>
            Continuar
          </Button>
        </form>
      </div>
      {success && (
        <div className="password-inputs">
          <div className="password-inputs__title">
            <h1>Cambiar contraseña</h1>
          </div>
          <form onSubmit={handleSubmitPassword}>
            <TextField
              error={error.constraint === "currentPassword"}
              helperText={error.constraint === "currentPassword" && error.errorMessage}
              onChange={handleChange}
              name="currentPassword"
              variant="outlined"
              label="Contraseña actual"
              type="password"
              value={userCurrentPassword.input}
              sx={{ margin: ".5rem 0", width: "100%" }}
            />
            <TextField
              error={password.shortPassword || error.constraint === "newPassword"}
              helperText={
                error.constraint === "newPassword" ? error.errorMessage : password.errorMessage
              }
              onChange={handleChange}
              name="newPassword"
              variant="outlined"
              label="Contraseña nueva"
              type="password"
              value={userNewPassword.input}
              sx={{ margin: ".5rem 0", width: "100%" }}
            />
            <Button variant="contained" color="secondary" type="submit" fullWidth>
              Actualizar
            </Button>
          </form>
        </div>
      )}
    </Layout>
  );
}

export default EditPassword;
