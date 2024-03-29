import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ProductContext from "../../../../context/product-context/ProductContext";

/**
 * Component to render the profile button.
 * @param {object} { resetSession } - It is used to reset the data session.
 * @returns {JSX.Element} - ProfileButton component
 */
function ProfileButton({ resetSession }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { resetProductState } = useContext(ProductContext);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          sx={{ color: "var(--color-primary-white)" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              "overflow": "visible",
              "filter": "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              "mt": 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                // eslint-disable-next-line quotes
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem component={Link} to="/profile">
            Mi perfil
          </MenuItem>
          <MenuItem component={Link} to="/orders">
            Mis compras
          </MenuItem>
          <Divider />
          <MenuItem
            component={Link}
            to="/"
            onClick={() => {
              resetSession();
              resetProductState();
              window.localStorage.removeItem("logged");
            }}
          >
            Salir
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default ProfileButton;
