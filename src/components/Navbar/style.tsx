import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

export const Navbar = styled("nav", {
  background: "$grey0",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const Botao = styled(Flex, {

  color: "$whiteFixed",
  paddingRight:"20px",
  
 
});

export const NavbarLinks = styled(Flex, {
  "& a": {
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: 0,
    position: "relative",

    "&:before": {
      content: "",
      position: "absolute",
      width: "70%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "#fff",
      visibility: "hidden",
      webkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      webkitTransition: "all 0.3s ease-in-out 0s",
      transition: "all 0.3s ease-in-out 0s",
    },
    
    "&:hover:before": {
      visibility: "visible",
      webkitTransform: "scaleX(1)",
      transform: "scaleX(1)",
    },
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    
    },
  },
  }
 
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
