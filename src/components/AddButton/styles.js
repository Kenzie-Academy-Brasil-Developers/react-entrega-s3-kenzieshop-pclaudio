import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

export const ButtonController = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  span: {
    color: theme.palette.text.secondary,
    fontSize: "1.5rem",
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  span: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));
