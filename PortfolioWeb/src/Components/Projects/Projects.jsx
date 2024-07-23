import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Projects = () => {
  const projects = [
    {
      title: 'Login',
      description: 'El proyecto consiste en desarrollar un sistema de inicio de sesión seguro para una aplicación web, permitiendo a los usuarios registrarse, iniciar sesión y cerrar sesión de manera eficiente y segura. El sistema incluirá un formulario de registro con validación de datos para correo electrónico y contraseña, con encriptación de contraseñas antes de su almacenamiento en la base de datos.',
      imgSrc: 'img/login.png',
      alt: 'Login Project'
    },
    {
      title: 'Services',
      description: 'El proyecto consiste en desarrollar una página web para una empresa de servicios, ofreciendo información clara y accesible sobre los servicios disponibles, con funcionalidades que faciliten la interacción con los clientes. La sección de servicios detallará las diferentes ofertas con descripciones completas, precios, y testimonios de clientes para aumentar la confianza.',
      imgSrc: 'img/services.png',
      alt: 'Services Project'
    }
  ];

  return (
    <Box as="section" id="project" bg="white" textAlign="center" p="70px">
      <Heading as="h2" mb="40px">Mis últimos proyectos</Heading>
      {projects.map((project, index) => (
        <Flex
          key={index}
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          mb="40px"
        >
          {index % 2 === 0 && (
            <Image
              src={project.imgSrc}
              alt={project.alt}
              maxW={{ base: '100%', md: '45%' }}
              borderRadius="10px"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              mb={{ base: '20px', md: '0' }}
            />
          )}
          <Box textAlign={{ base: 'center', md: 'left' }} maxW={{ base: '100%', md: '35%' }}>
            <Heading as="h3" fontSize="24px" pb="15px">{project.title}</Heading>
            <Text>{project.description}</Text>
          </Box>
          {index % 2 !== 0 && (
            <Image
              src={project.imgSrc}
              alt={project.alt}
              maxW={{ base: '100%', md: '45%' }}
              borderRadius="10px"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              mb={{ base: '20px', md: '0' }}
            />
          )}
        </Flex>
      ))}
    </Box>
  );
}

export default Projects;
