import React from 'react';
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react';

const SobreMi = () => {
  return (
    <Box
      as="section"
      id="about"
      padding="70px 180px"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#d0e1f9"
    >
      <VStack spacing="6">
        <Heading as="h2" fontWeight="600" fontSize="30px">Sobre Mi</Heading>
        <Heading as="h4" fontSize="22px" fontWeight="300" color="black" paddingTop="15px" paddingBottom="30px">
          Programador Full Stack
        </Heading>
        <Text padding="25px" lineHeight="1.5" color="rgba(0,0,0,0.6)">
          Hola, mi nombre es Valentino Isgro y soy estudiante de Ingeniería en Sistemas en la Universidad Tecnológica Nacional. Con 20 años de edad, me encuentro actualmente en el tercer año de mi carrera. Mi interés por la tecnología y la informática me ha llevado a inscribirme en un curso de Desarrollo Web FullStack, donde estoy aprendiendo nuevas tecnologías y perfeccionando mis habilidades en el desarrollo web.
        </Text>
        <Text padding="25px" lineHeight="1.5" color="rgba(0,0,0,0.6)">
          Al día de hoy estoy aprendiendo HTML, CSS y JS, que son las tecnologías básicas para la creación de sitios o páginas web. He utilizado estas habilidades para crear páginas web estáticas e interactivas. Además, he aprendido lenguajes de programación como Java y C++, lo que me ha dado una base sólida en programación orientada a objetos. También tengo experiencia en la gestión y administración de bases de datos tanto relacionales (SQL) como no relacionales (NoSQL), lo que me permite manejar y estructurar datos de manera eficiente en diversos contextos.
        </Text>
        <Text padding="25px" lineHeight="1.5" color="rgba(0,0,0,0.6)">
          Quiero ser parte de grandes proyectos que me desafíen y me ayuden a crecer como profesional. Mi objetivo es ser parte de proyectos que pueden marcar una gran diferencia y generar cambios positivos. También estoy entusiasmado con la oportunidad de trabajar con un equipo de personas talentosas que pueden inspirarme y desafiarme a convertirme en un mejor programador. Siempre estoy buscando nuevas formas de aprender y crecer, para poder estar al día con todas las cosas interesantes que suceden en el mundo de la tecnología.
        </Text>
        <Box paddingTop="30px">
          <Link
            href='files/Valentino_Isgro_CV.pdf'
            download='Curriculum vitae.pdf'
            textDecoration="none"
            textTransform="uppercase"
            fontWeight="bold"
            borderRadius="7px"
            padding="10px"
            border="1px solid #007bff"
            backgroundColor="#007bff"
            color="#ffffff"
            fontSize="12px"
            transition="background-color 1s"
            _hover={{ backgroundColor: '#014a97' }}
          >
            Descargar CV
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default SobreMi;