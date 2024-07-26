import React from 'react';
import { Box, Text, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

const Experience = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'space-between',
    gap: '40px',
    flexDirection: isMobile ? 'column' : 'row',
    width: { base: '100%', '2xl': '70%' }
  };

  const boxStyles = {
    border: '3px solid',
    borderColor: 'transparent',
    textAlign: 'left',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    transition: 'background-color 0.7s',
    _hover: { backgroundColor: '#007bff', color: 'white' }
  };

  const textStyles = {
    fontSize: '11px',
    color: 'rgba(0,0,0,0.6)',
    padding: '5px'
  };

  const h3Styles = {
    fontSize: '14px',
    padding: '5px',
    fontWeight: '700'
  };

  const h4Styles = {
    fontSize: '12px',
    padding: '5px',
    fontWeight: '500'
  };

  return (
    <Flex id="experiencia" p={{ base: '60px 50px', md: '60px 120px' }} textAlign="center" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#ffffff">

      <Heading as="h2" fontWeight="600" fontSize="30px" mb="40px" pt="10px">
        Experiencia Laboral
      </Heading>
      
      <Text p='10px'fontSize='14px' lineHeight='1.5' color='rgba(0,0,0,0.6)' mb='60px'>
        En esta sección puedes ver mi experiencia laboral, destacando mis últimos trabajos.
      </Text>

      <Flex sx={containerStyles}>

        <Box sx={boxStyles}>
          <Text sx={textStyles}>Año 0000- Mes 0000- Día 0000</Text>
          <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
          <Heading as='h4' sx={h4Styles}>Nombre empresa</Heading>
          <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en este trabajo.</Text>
        </Box>

        <Box sx={boxStyles}>
          <Text sx={textStyles}>Año 0000- Mes 0000- Día 0000</Text>
          <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
          <Heading as='h4' sx={h4Styles}>Nombre empresa</Heading>
          <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en este trabajo.</Text>
        </Box>

        <Box sx={boxStyles}>
          <Text sx={textStyles}>Año 0000- Mes 0000- Día 0000</Text>
          <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
          <Heading as='h4' sx={h4Styles}>Nombre empresa</Heading>
          <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en este trabajo.</Text>
        </Box>

      </Flex>

    </Flex>
  );
};

export default Experience;
