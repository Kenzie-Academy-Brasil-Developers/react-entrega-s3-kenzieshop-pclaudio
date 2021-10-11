import { styled } from "@mui/material/styles";
import { Paper as MuiPaper, Typography as MuiTypography } from "@mui/material";

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontSize: "3rem",
  color: theme.palette.text.secondary,
  marginTop: "40px",
}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  marginTop: "16px",
  padding: "20px 10px",
}));

export const Total = styled(MuiTypography)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.text.secondary,
}));
