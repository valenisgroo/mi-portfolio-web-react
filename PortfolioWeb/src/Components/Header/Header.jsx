import React from 'react';
import { Box, Flex, Link, Icon, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, HStack } from '@chakra-ui/react';
import { FaBars, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkStyles = {
    fontWeight: '500',
    fontSize: { base: '14px', md: '16px' },
    padding: { base: '8px 10px', md: '10px 15px' }, 
    textDecoration: 'none',
    transition: 'color 0.3s, background-color 0.3s ease',
    fontFamily: 'Helvetica',
    color: 'black',
    _hover: { color: '#007bff' },
  };

  return (
    <Box as="header" bg="#F8F9FB" color="black" padding="15px 0" position="fixed" width="100%" zIndex="99">
      <Flex justify="space-between" align="center" padding={{ base: '0 5%', md: '0 10%' }}>
        <Link href="#" fontSize="20px" fontWeight="600" color="black" _hover={{ textDecoration: 'none' }}>
          Valentino Isgro
        </Link>

        <Flex as="nav" justify="center" align="center">
          <Flex as="ul" listStyleType="none" padding="0" margin="0" gap="10px" display={{ base: 'none', lg: 'flex' }}>
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
          <Button
            display={{ base: 'block', lg: 'none' }}
            onClick={onOpen}
            bg="transparent"
            border="none"
            p="0"
            _focus={{ boxShadow: 'none' }}
            _hover={{ bg: 'transparent' }}
          >
            <Icon as={FaBars} boxSize="30px" color="black" />
          </Button>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent
          bg="#f0f0f0"
          color="black"
          transition="transform 0.3s ease"
        >
          <DrawerCloseButton color="black" />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4" align="start">
              <Link href="#inicio" onClick={onClose} color="black">Inicio</Link>
              <Link href="#about" onClick={onClose} color="black">Sobre Mí</Link>
              <Link href="#experiencia" onClick={onClose} color="black">Experiencia</Link>
              <Link href="#skills" onClick={onClose} color="black">Habilidades</Link>
              <Link href="#project" onClick={onClose} color="black">Proyectos</Link>
              <Link href="#testimonial" onClick={onClose} color="black">Testimonios</Link>
              <Link href="#contact" onClick={onClose} color="black">Contacto</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack spacing="10px">
              <Link href="https://wa.me/2612453983" isExternal>
                <Icon as={FaWhatsapp} boxSize="30px" color="black" />
              </Link>
              <Link href="https://www.instagram.com/valenisgroo_/" isExternal>
                <Icon as={FaInstagram} boxSize="30px" color="black" />
              </Link>
              <Link href="https://www.facebook.com/valentino.isgro" isExternal>
                <Icon as={FaFacebook} boxSize="30px" color="black" />
              </Link>
              <Link href="https://www.linkedin.com/in/valentino-isgro-33b637196/" isExternal>
                <Icon as={FaLinkedin} boxSize="30px" color="black" />
              </Link>
              <Link href="https://github.com/valenisgroo" isExternal>
                <Icon as={FaGithub} boxSize="30px" color="black" />
              </Link>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
