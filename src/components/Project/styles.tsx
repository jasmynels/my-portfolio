import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
// import styled, { css } from 'styled-components'

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey5",
    cursor: "pointer",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {

  
});
export const Imgs = styled("img", {
  width: "350px",
  borderRadius: "5px",
  transition: "transform 1s",
  transform: "translateX(0) scale(1.0)",

  "&:hover": {
    transform: "translateX(10px) scale(1.2)"
  },
  
})
  



export const Project = styled("article", {

  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // border: "1px solid #fff",
  
  marginTop: "4rem",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "400px",
      display: "flex",
      justifyContent: "center",

      "@mobile": {
        width: "auto",
      },
    },
  },
});
