import React from 'react';
import { Box, Heading, Link, Text, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box as="section" id="contact" width="100%" bg="#ffffff" textAlign="center" py="70px" px="20px">
      <Heading as="h2" fontWeight="600" fontSize="30px" mb="6px">Interesados que deseen</Heading>
      <Heading as="h2" fontWeight="600" fontSize="30px" mb="30px">trabajar conmigo?</Heading>
      <Link
        href="#"
        display="inline-block"
        textDecoration="none"
        bg="#007bff"
        color="white"
        py="10px"
        px="20px"
        borderRadius="7px"
        transition="0.7s"
        fontWeight="400"
        mb="20px"
        fontSize="15px"
        _hover={{ bg: '#014a97' }}
      >
        Contactarme
      </Link>
      <Text pt="10px" pb="40px">Estoy seguro de como puedo convertir tu idea en un diseño increíble</Text>
      <Flex justify="center" flexWrap="wrap" gap="20px">
        <Box
          width="230px"
          height="130px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px" fontSize="lg">Seguime:</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Link href="https://www.instagram.com/valenisgroo_/" isExternal>
              <Icon as={FaInstagram} boxSize="24px" color="black" />
            </Link>
            <Link href="https://www.linkedin.com/in/valentino-isgro-33b637196/" isExternal>
              <Icon as={FaLinkedin} boxSize="24px" color="black" />
            </Link>
            <Link href="https://github.com/valenisgroo" isExternal>
              <Icon as={FaGithub} boxSize="24px" color="black" />
            </Link>
          </Flex>
        </Box>

        <Box
          width="230px"
          height="130px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px" fontSize="lg">Llamar:</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text>(+54) 2615653576</Text>
          </Flex>
        </Box>

        <Box
          width="230px"
          height="130px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px" fontSize="lg">Mail:</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text>valentinoisgro@gmail.com</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
