import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  Imgs,
} from "./styles";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import KenzieHub from "../../imgs/KenzieHub.png";
import Hamburgueria from "../../imgs/burguer.png";
import BandKamp from "../../imgs/bandkamp.jpg";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  return (
    <>
      <ProjectWrapper>
        <ProjectTitle
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey4"
        >
          KenzieHub
        </ProjectTitle>
        <Imgs src={KenzieHub} />
        <ProjectStack>
          <Text type="body2" color="grey2">
            Primary Language: TypeScript, React
          </Text>

          <ProjectStackTech>
            <Text color="grey2" type="body2"></Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2"></Text>
        <ProjectLinks>
          <ProjectLink target="_blank" href={`https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-jasmynels`}>
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink target="_blank" href={`https://react-entrega-s2-formulario-de-cadastro-jasmynels-jasmynels.vercel.app`}>
            <FaShare /> See demo
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>

      {/* ==============================================================================================================  */}
      <ProjectWrapper>
        <ProjectTitle
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey4"
        >
          BurguerKenzie
        </ProjectTitle>
        <Imgs src={Hamburgueria} />
        <ProjectStack>
          <Text type="body2" color="grey2">
            Primary Language: JavaScript, React
          </Text>

          <ProjectStackTech>
            <Text color="grey2" type="body2"></Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2"></Text>
        <ProjectLinks>
          <ProjectLink target="_blank" href={`https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-jasmynels`}>
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink target="_blank" href={`https://react-entrega-s1-hamburgueria-da-kenzie-jasmynels.vercel.app/`}>
            <FaShare /> See demo
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>
      {/* ================================================================================================================= */}
      <ProjectWrapper>
        <ProjectTitle
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey4"
        >
          API BandKamp
        </ProjectTitle>
        <Imgs src={BandKamp} />
        <ProjectStack>
          <Text type="body2" color="grey2">
            Primary Language: Python, Django
          </Text>

          <ProjectStackTech>
            <Text color="grey2" type="body2"></Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2"></Text>
        <ProjectLinks>
          <ProjectLink target="_blank" href={`https://github.com/Kenzie-Academy-Brasil-Developers/m5-bandkamp-generic-view-jasmyne`}>
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink target="_blank" href={`https://bandkamp-api-tkgl.onrender.com/docs/redoc/#tag/api/operation/api_users_list`}>
            <FaShare /> See demo
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>
    </>
  );
};
