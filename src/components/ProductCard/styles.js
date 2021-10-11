import { styled } from "@mui/material/styles";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Grid as MuiGrid,
  Typography,
} from "@mui/material";

export const Grid = styled(MuiGrid)(({ theme }) => ({
  display: "flex",
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

export const EyeBrow = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: theme.palette.text.secondary,
  lineHeight: 0,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bolder",
  textTransform: "uppercase",
  flexGrow: 1,
}));

export const NormalPrice = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.error.main,
  textDecoration: "line-through",
  margin: "5px 0",
}));

export const Qauntity = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.text.secondary,
  margin: "5px 0",
}));

export const DiscountPrice = styled(Typography)(({ theme }) => ({
  fontSize: "1.7rem",
  fontWeight: "bolder",
  color: theme.palette.primary.main,
  margin: "5px 0",
}));

export const InStock = styled(Typography)(({ theme }) => ({
  fontSize: ".9rem",
  color: theme.palette.text.secondary,
  margin: "5px 0",
}));
