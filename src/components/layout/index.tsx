import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import DrawerLeft from "../atoms/DrawerLeft";

interface LayoutProps {
  children: React.ReactElement;
}

const LayoutStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  maxWidth: "100vw",
  minWidth: "100vw",
  minHeight: "100vh",
  fontFamily: "Nunito",
}));

export default function Layout({ children }: LayoutProps) {
  let { pathname } = useLocation();

  return pathname === "/" ? (
    <LayoutStyled>{children}</LayoutStyled>
  ) : (
    <DrawerLeft>{children}</DrawerLeft>
  );
}
