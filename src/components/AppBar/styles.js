import { styled } from "@mui/material/styles";
import { Toys } from "@mui/icons-material";
import { Box as MuiBox } from "@mui/material";

export const Logo = styled(Toys)(({ theme }) => ({
  marginRight: "8px",
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  flexGrow: 1,
}));
