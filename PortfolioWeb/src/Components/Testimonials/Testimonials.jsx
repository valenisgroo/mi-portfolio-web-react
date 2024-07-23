import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Martha Sandoval',
    title: 'Product Designer',
    image: 'img/cliente1.jpg',
    description: 'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth asset management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuously.'
  },
  {
    name: 'Stevin Smith',
    title: 'UX Designer',
    image: 'img/cliente2.jpg',
    description: 'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth asset management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuously.'
  }
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonial" width="100%" bg="#d0e1f9" textAlign="center" py="70px">
      <Heading as="h3" fontSize="24px" mb="10px">Testimonios</Heading>
      <Heading as="h2" mb="40px">Clientes Felices</Heading>

      <Flex justify="center" gap="30px" px="30px">
        {testimonials.map((testimonial, index) => (
          <Flex
            key={index}
            width={{ base: '100%', md: '40%' }}
            borderRadius="10px"
            p="20px"
            bg="#ffffff"
            boxShadow="0 4px 8px rgba(0,0,0,0.1)"
            textAlign="left"
            align="flex-start"
            gap="20px"
            position="relative"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width="60px"
              height="60px"
              borderRadius="50%"
              border="solid 1px #007bff"
              position="absolute"
              top="18px"
              left="25px"
            />
            <Box pl="90px">
              <Heading as="h5" fontSize="18px" fontWeight="bold" m="0">
                {testimonial.name}
              </Heading>
              <Text as="h6" fontSize="16px" color="#888" display="block" mb="15px">
                {testimonial.title}
              </Text>
              <Text m="0">{testimonial.description}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
