import React from 'react';
import {
  Box, Heading, Text, Link, Image, VStack, HStack, Icon,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton,
  Button, useDisclosure
} from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      width="100%"
      height={{ base: 'auto', md: '85vh' }}
      bg="#ffffff"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={{ base: "20px", md: "70px 180px" }}
    >
      <VStack align="flex-start" maxWidth={{ base: "100%", md: "500px" }} pt={{ base: "50px", md: "100px" }} spacing="6">
        <Heading as="h2" fontFamily="Roboto, sans-serif" fontWeight="400">
          Hola, soy
          <Box as="span" bg="white" color="#575454" p="1px 4px" fontSize="13px" fontWeight="300" borderRadius="10px" border="1px solid #575454" ml="10px">
            PROGRAMADOR
          </Box>
        </Heading>
        <Heading as="h1" fontFamily="sans-serif" fontWeight="600" m="0" fontSize={{ base: "2xl", md: "4xl" }}>
          Valentino Isgro
        </Heading>
        <Text pb="10px" width={{ base: '100%', md: '600px' }} color="rgba(0,0,0,0.6)">
          Cada línea de código es una oportunidad para mejorar y/o aprender nuevas habilidades como programador.
        </Text>
        <Link href="#contacto" textDecoration="none" bg="#007bff" color="white" fontSize="15px" p="10px" borderRadius="7px" transition="background-color 1s" fontWeight="400" mb="10px" _hover={{ bg: '#014a97' }} onClick={onOpen}>
          Contáctame
        </Link>

        <HStack spacing="15px" fontSize={{ base: "10px", md: "12px" }} fontWeight="600" color="#000">
          <Text><Box as="span" color="#007bff">6</Box> Meses de experiencia</Text>
          <Text><Box as="span" color="#007bff">10+</Box> Proyectos hechos</Text>
          <Text><Box as="span" color="#007bff">50+</Box> Clientes</Text>
        </HStack>

        <HStack spacing="10px" pt="10px">
          <Link href="https://wa.me/2612453983" isExternal>
            <Icon as={FaWhatsapp} boxSize={{ base: "30px", md: "40px" }} color="#007bff" border="2px solid #007bff" borderRadius="50%" p="8px" transition="background-color 2s, color 2s" _hover={{ bg: '#007bff', color: 'white' }} />
          </Link>
          <Link href="https://www.instagram.com/valenisgroo_/" isExternal>
            <Icon as={FaInstagram} boxSize={{ base: "30px", md: "40px" }} color="#007bff" border="2px solid #007bff" borderRadius="50%" p="8px" transition="background-color 2s, color 2s" _hover={{ bg: '#007bff', color: 'white' }} />
          </Link>
          <Link href="https://www.facebook.com/valentino.isgro" isExternal>
            <Icon as={FaFacebook} boxSize={{ base: "30px", md: "40px" }} color="#007bff" border="2px solid #007bff" borderRadius="50%" p="8px" transition="background-color 2s, color 2s" _hover={{ bg: '#007bff', color: 'white' }} />
          </Link>
          <Link href="https://www.linkedin.com/in/valentino-isgro-33b637196/" isExternal>
            <Icon as={FaLinkedin} boxSize={{ base: "30px", md: "40px" }} color="#007bff" border="2px solid #007bff" borderRadius="50%" p="8px" transition="background-color 2s, color 2s" _hover={{ bg: '#007bff', color: 'white' }} />
          </Link>
          <Link href="https://github.com/valenisgroo" isExternal>
            <Icon as={FaGithub} boxSize={{ base: "30px", md: "40px" }} color="#007bff" border="2px solid #007bff" borderRadius="50%" p="8px" transition="background-color 2s, color 2s" _hover={{ bg: '#007bff', color: 'white' }} />
          </Link>
        </HStack>
      </VStack>

      <Image 
        src="img/img1.jpeg" 
        alt="Valentino Isgro" 
        border="2px solid white" 
        borderRadius="20px" 
        w={{ base: "150px", md: "250px" }} 
        h={{ base: "300px", md: "400px" }} 
        boxShadow="0 0 20px rgba(0, 0, 0, 0.1)" 
        display={{ base: "none", md: "block" }} 
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CONTACTO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="4">Cualquier consulta que tengas, acá abajo tienes mi contacto</Text>
            <Text fontWeight="bold">Email:</Text>
            <Text mb="4">valentinoisgro@gmail.com</Text>
            <Text fontWeight="bold">Teléfono:</Text>
            <Text mb="4">(+54) 2615653576</Text>
            <Text fontWeight="bold">Localidad:</Text>
            <Text>Mendoza, Argentina</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Hero;
