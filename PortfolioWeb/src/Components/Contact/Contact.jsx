import React from 'react';
import { Box, Heading, Link, Text, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box as="section" id="contact" width="100%" bg="#ffffff" textAlign="center" py="70px" px="20px">
      <Heading as="h2" mb="10px">Interesados En Trabajar</Heading>
      <Heading as="h2" mb="20px">Conmigo?</Heading>
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
      <Text pt="10px" pb="30px">Estoy seguro de como puedo convertir tu idea en un diseño increíble</Text>
      <Flex justify="center" flexWrap="wrap" gap="20px">
        <Box
          width="300px"
          height="150px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px">Seguime:</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text>Instagram</Text>
            <Text>Facebook</Text>
            <Text>Tiktok</Text>
          </Flex>
        </Box>

        <Box
          width="300px"
          height="150px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px">Llamar</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text>(+54)2615653576</Text>
          </Flex>
        </Box>

        <Box
          width="300px"
          height="150px"
          borderRadius="10px"
          p="20px"
          textAlign="center"
          bg="gray.50"
          boxShadow="md"
        >
          <Heading as="h4" mb="10px">Mail</Heading>
          <Flex align="center" gap="10px" justify="center" height="90px">
            <Text>valentinoisgro@gmail.com</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
