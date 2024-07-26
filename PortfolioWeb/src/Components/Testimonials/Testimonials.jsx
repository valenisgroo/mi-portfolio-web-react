import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Martha Sandoval',
    title: 'Product Designer',
    image: 'img/cliente1.jpg',
    description: 'Nos motiva la satisfacción de nuestros clientes. Confía en nosotros y comparte nuestro crecimiento. La gestión de activos está compuesta por un equipo de expertos, comprometidos y experimentados, con una pasión por los mercados financieros. Nuestro objetivo es lograrlo continuamente.'
  },
  {
    name: 'Stevin Smith',
    title: 'UX Designer',
    image: 'img/cliente2.jpg',
    description: 'Nos motiva la satisfacción de nuestros clientes. Confía en nosotros y comparte nuestro crecimiento. La gestión de activos está compuesta por un equipo de expertos, comprometidos y experimentados, con una pasión por los mercados financieros. Nuestro objetivo es lograrlo continuamente.'
  },
  {
    name: 'Laura García',
    title: 'Web Developer',
    image: 'img/cliente3.jpg',
    description: 'Nos motiva la satisfacción de nuestros clientes. Confía en nosotros y comparte nuestro crecimiento. La gestión de activos está compuesta por un equipo de expertos, comprometidos y experimentados, con una pasión por los mercados financieros. Nuestro objetivo es lograrlo continuamente.'
  },
  {
    name: 'Carlos Méndez',
    title: 'Marketing Specialist',
    image: 'img/cliente4.jpg',
    description: 'Nos motiva la satisfacción de nuestros clientes. Confía en nosotros y comparte nuestro crecimiento. La gestión de activos está compuesta por un equipo de expertos, comprometidos y experimentados, con una pasión por los mercados financieros. Nuestro objetivo es lograrlo continuamente.'
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box as="section" id="testimonial" width="100%" bg="#ccdcf5" textAlign="center" py={{ base: '40px', md: '70px' }}>

      <Heading as="h3" fontSize={{ base: '18px', md: '20px' }} mb={{ base: '10px', md: '15px' }} mt="10px">
        Testimonios
      </Heading>

      <Heading as="h2" fontWeight="600" fontSize={{ base: '24px', md: '30px' }} mb={{ base: '30px', md: '40px' }}>
        Clientes Felices
      </Heading>

      <Box width={{ base: '90%', md: '80%' }} mx="auto">
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={{ base: '10px', md: '20px' }}>

              <Flex
                borderRadius="10px"
                p={{ base: '15px', md: '20px' }}
                bg="#ffffff"
                boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                textAlign="left"
                align="flex-start"
                gap={{ base: '15px', md: '20px' }}
                position="relative"
                height="100%"
              >

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={{ base: '50px', md: '60px' }}
                  height={{ base: '50px', md: '60px' }}
                  borderRadius="50%"
                  border="solid 1px #007bff"
                  position="absolute"
                  top={{ base: '15px', md: '20px' }}
                  left={{ base: '15px', md: '20px' }}
                />

                <Box pl={{ base: '70px', md: '90px' }}>
                  
                  <Heading as="h5" fontSize={{ base: '16px', md: '18px' }} fontWeight="bold" m="0">
                    {testimonial.name}
                  </Heading>

                  <Text as="h6" fontSize={{ base: '14px', md: '16px' }} color="#888" display="block" mb="15px">
                    {testimonial.title}
                  </Text>

                  <Text m="0">{testimonial.description}</Text>

                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
