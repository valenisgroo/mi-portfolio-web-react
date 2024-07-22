import React from 'react';
import { Box, Flex, Heading, Text, Link, Image, VStack, HStack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      width="100%"
      height="85vh"
      bg="#ffffff"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="70px 180px"
    >
      <VStack align="flex-start" maxWidth="500px" pt="80px" spacing="6">
        <Heading as="h2" fontFamily="Roboto" fontWeight="400">
          Hola, soy
          <Box as="span" bg="white" color="#575454" p="1px 4px" fontSize="13px" fontWeight="300" borderRadius="10px" border="1px solid #575454" ml="10px">
            PROGRAMADOR
          </Box>
        </Heading>
        <Heading as="h1" fontFamily="Roboto" fontWeight="600" m="0" pb="25px">
          Valentino Isgro
        </Heading>
        <Text pb="30px" width="600px" color="rgba(0,0,0,0.6)">
          En el front-end, disfruto crear interfaces atractivas y amigables, mientras que en el back-end, me sumerjo en la arquitectura y la lógica de la aplicación. Cada línea de código es una oportunidad para mejorar y/o aprender nuevas habilidades como programador.
        </Text>
        <Link href="#contacto" textDecoration="none" bg="#007bff" color="white" fontSize="15px" p="10px" borderRadius="7px" transition="1s" fontWeight="400" mb="10px" _hover={{ bg: '#014a97' }}>
          Contactarme
        </Link>
        <HStack spacing="15px" pt="20px" fontSize="12px" fontWeight="600" color="#000">
          <Text><Box as="span" color="#007bff">6</Box> Meses de experiencia</Text>
          <Text><Box as="span" color="#007bff">10+</Box> Proyectos hechos</Text>
          <Text><Box as="span" color="#007bff">50+</Box> Clientes</Text>
        </HStack>
      </VStack>
      <Image src="img/img1.jpeg" alt="Valentino Isgro" border="2px solid white" borderRadius="20px" w="250px" h="400px" boxShadow="0 0 20px rgba(0, 0, 0, 0.1)" />
    </Box>
  );
};

export default Hero;
