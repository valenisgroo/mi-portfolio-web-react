import React from 'react';
import {
  Box, Heading, Link, Text, Flex, Icon,
  useDisclosure, Button, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalFooter, ModalCloseButton
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      id="contact"
      width="100%"
      bg="#ffffff"
      textAlign="center"
      py={{ base: '40px', md: '70px' }}
      px={{ base: '20px', md: '40px' }}
    >
      <Heading
        as="h2"
        fontWeight="600"
        fontSize={{ base: '24px', md: '30px' }}
        mb={{ base: '4px', md: '6px' }}
      >
        Interesados que deseen
      </Heading>
      <Heading
        as="h2"
        fontWeight="600"
        fontSize={{ base: '24px', md: '30px' }}
        mb={{ base: '20px', md: '30px' }}
      >
        trabajar conmigo?
      </Heading>
      <Button
        onClick={onOpen}
        display="inline-block"
        textDecoration="none"
        bg="#007bff"
        color="white"
        py={{ base: '8px', md: '10px' }}
        px={{ base: '16px', md: '20px' }}
        borderRadius="7px"
        transition="0.7s"
        fontWeight="400"
        mb={{ base: '16px', md: '20px' }}
        fontSize={{ base: '14px', md: '15px' }}
        _hover={{ bg: '#014a97' }}
      >
        Contáctame
      </Button>
      <Text pt={{ base: '8px', md: '10px' }} pb={{ base: '30px', md: '40px' }}>
        Estoy seguro de como puedo convertir tu idea en un diseño increíble
      </Text>

      <Flex justify="center" flexWrap="wrap" gap="20px">
        <Box
          width={{ base: '200px', md: '230px' }}
          height={{ base: '110px', md: '130px' }}
          borderRadius="10px"
          p={{ base: '16px', md: '20px' }}
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb={{ base: '8px', md: '10px' }} fontSize={{ base: 'md', md: 'lg' }}>
            Seguime:
          </Heading>
          <Flex align="center" gap={{ base: '8px', md: '10px' }} justify="center" height="90px">
            <Link href="https://www.instagram.com/valenisgroo_/" isExternal>
              <Icon as={FaInstagram} boxSize={{ base: '20px', md: '24px' }} color="black" />
            </Link>
            <Link href="https://www.linkedin.com/in/valentino-isgro-33b637196/" isExternal>
              <Icon as={FaLinkedin} boxSize={{ base: '20px', md: '24px' }} color="black" />
            </Link>
            <Link href="https://github.com/valenisgroo" isExternal>
              <Icon as={FaGithub} boxSize={{ base: '20px', md: '24px' }} color="black" />
            </Link>
          </Flex>
        </Box>

        <Box
          width={{ base: '200px', md: '230px' }}
          height={{ base: '110px', md: '130px' }}
          borderRadius="10px"
          p={{ base: '16px', md: '20px' }}
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb={{ base: '8px', md: '10px' }} fontSize={{ base: 'md', md: 'lg' }}>
            Llamar:
          </Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text fontSize={{ base: 'sm', md: 'md' }}>(+54) 2615653576</Text>
          </Flex>
        </Box>

        <Box
          width={{ base: '200px', md: '230px' }}
          height={{ base: '110px', md: '130px' }}
          borderRadius="10px"
          p={{ base: '16px', md: '20px' }}
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb={{ base: '8px', md: '10px' }} fontSize={{ base: 'md', md: 'lg' }}>
            Mail:
          </Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text fontSize={{ base: 'sm', md: 'md' }}>valentinoisgro@gmail.com</Text>
          </Flex>
        </Box>
      </Flex>

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

export default Contact;
