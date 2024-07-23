import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

const Header = () => {
  const linkStyles = {
    fontWeight: '500',
    fontSize: '16px',
    padding: '10px 15px',
    textDecoration: 'none',
    transition: 'color 1s, background-color 0.3s ease',
    fontFamily: 'sans-serif',
    color: 'black',
    _hover: { color: '#007bff' },
  };

  return (
    <Box as="header" bg="#f0f0f0" color="black" padding="10px 0" position="fixed" width="100%" zIndex="99">
      <Flex justify="space-between" align="center" padding="0 10%">
        <Link href="#" fontSize="23px" fontWeight="600" color="black" _hover={{ textDecoration: 'none' }}>
          Valentino Isgro
        </Link>
        <Flex as="nav" justify="center" align="center">
          <Flex as="ul" listStyleType="none" padding="0" margin="0" gap="15px" display={{ base: 'none', md: 'flex' }}>
            <Box as="li">
              <Link href="#inicio" sx={linkStyles}>Inicio</Link>
            </Box>
            <Box as="li">
              <Link href="#about" sx={linkStyles}>Sobre Mí</Link>
            </Box>
            <Box as="li">
              <Link href="#experiencia" sx={linkStyles}>Experiencia</Link>
            </Box>
            <Box as="li">
              <Link href="#skills" sx={linkStyles}>Habilidades</Link>
            </Box>
            <Box as="li">
              <Link href="#project" sx={linkStyles}>Proyectos</Link>
            </Box>
            <Box as="li">
              <Link href="#testimonial" sx={linkStyles}>Testimonios</Link>
            </Box>
            <Box as="li">
              <Link href="#contact" sx={linkStyles}>Contacto</Link>
            </Box>
          </Flex>
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
