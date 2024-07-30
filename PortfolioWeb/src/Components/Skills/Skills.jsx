import React from 'react';
import { Box, Flex, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { FaHtml5, FaCss3, FaJsSquare, FaDatabase } from 'react-icons/fa'; 

const Skills = () => {
    const skillItems = [
        { percentage: '95%', label: 'HTML5', icon: <FaHtml5 size="50px" color="black" /> },
        { percentage: '95%', label: 'CSS3', icon: <FaCss3 size="50px" color="black" /> },
        { percentage: '95%', label: 'JavaScript', icon: <FaJsSquare size="50px" color="black" /> },
        { percentage: '95%', label: 'SQL', icon: <FaDatabase size="50px" color="black" /> }
    ];

    return (
         
         <Box id="skills" w="100%" bg="#ccdcf5" textAlign="center" p={{ base: '70px 20px', md: '70px 180px' }}>

            <Heading as="h2" fontWeight="600" fontSize={{ base: '24px', md: '30px' }} mb="20px" pt="10px">
                Soy experto en
            </Heading>
            
            <Text mb="60px" fontSize={{ base: '14px', md: '16px' }}>
                En esta sección puedes ver mis habilidades como programador, enfocándome principalmente en Front-end.
            
            </Text>
            <Flex justify="center" flexWrap="wrap" gap="28px">
                {skillItems.map((item, index) => (
                    
                    <VStack key={index} w={{ base: '140px', sm: '150px', md: '170px' }} h={{ base: '180px', sm: '190px', md: '210px' }} borderRadius="10px" p="20px 10px" boxShadow="0 4px 8px rgba(0,0,0,0.1)" textAlign="center" bg="#ffffff" transition="background-color 1s" _hover={{ bg: '#0078d4' }}>
                        {item.icon}
                        
                        <Heading as="h2" fontSize={{ base: '18px', md: '22px' }} pt="20px" color="#0078d4" transition="color 0.5s" _hover={{ color: '#ffffff' }}>
                            {item.percentage}
                        </Heading>
                        
                        <Heading as="h4" fontSize={{ base: '14px', md: '18px' }} color="#333333">
                            {item.label}
                        
                        </Heading>

                    </VStack>
                ))}
            </Flex>
        </Box>
    );
}

export default Skills;