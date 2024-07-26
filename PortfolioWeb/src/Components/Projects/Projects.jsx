import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Projects = () => {
  const projects = [
    {
      title: 'Login',
      description: 'El proyecto consiste en desarrollar un sistema de inicio de sesión seguro para una aplicación web, permitiendo a los usuarios registrarse, iniciar sesión y cerrar sesión de manera eficiente y segura. El sistema incluirá un formulario de registro con validación de datos para correo electrónico y contraseña, con encriptación de contraseñas antes de su almacenamiento en la base de datos.',
      imgSrc: 'img/login.png',
      alt: 'Login Project',
      link: 'https://valenisgroo.github.io/image-based-web-project-login/'
    },

    {
      title: 'Services',
      description: 'El proyecto consiste en desarrollar una página web para una empresa de servicios, ofreciendo información clara y accesible sobre los servicios disponibles, con funcionalidades que faciliten la interacción con los clientes. La sección de servicios detallará las diferentes ofertas con descripciones completas, precios, y testimonios de clientes para aumentar la confianza.',
      imgSrc: 'img/services.png',
      alt: 'Services Project',
      link: 'https://valenisgroo.github.io/image-based-web-project-services/'
    }

  ];

  return (
    <Box as="section" id="project" bg="white" textAlign="center" p={{ base: '40px 20px', md: '70px 40px' }}>
      
      <Heading as="h2" fontWeight="600" fontSize={{ base: '24px', md: '30px' }} mb={{ base: '40px', md: '70px' }}>
        Mis últimos proyectos
      </Heading>
        
      {projects.map((project, index) => (
        
        <Flex
          key={index}
          direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
          align="center"
          justify="space-between"
          mb="40px"
          textAlign={{ base: 'center', md: 'left' }}
        >

          <Box display={{ base: 'block', md: 'flex' }} justifyContent="center" flex={{ base: '0 0 100%', md: '0 0 45%' }} mb={{ base: '20px', md: '0' }}>
            <a href={project.link} style={{ display: 'block', width: '100%' }}>
              <Image
                src={project.imgSrc}
                alt={project.alt}
                maxW="100%"
                borderRadius="10px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                cursor="pointer"
              />
            </a>
          </Box>

          <Box flex={{ base: '0 0 100%', md: '0 0 45%' }} px={{ base: '20px', md: '0' }}> 
            <Heading as="h3" fontSize={{ base: '20px', md: '24px' }} pb="15px">
              {project.title}
            </Heading>

            <Text>{project.description}</Text>
          </Box>

        </Flex>
      ))}
    </Box>
  );
}

export default Projects;
