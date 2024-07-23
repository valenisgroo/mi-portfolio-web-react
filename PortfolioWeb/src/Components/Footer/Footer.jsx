import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="10px" px={{ base: '20px', md: '40px' }} color="gray.600">
      <Divider borderColor="gray.400" />
      <Box display="flex" justifyContent="space-between" mt="10px" fontSize="13px">
        <Text>&copy; 2024 Valentino Isgro</Text>
        <Text>Todo reservado.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
