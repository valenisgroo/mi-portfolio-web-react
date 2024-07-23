import React from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

const Skills = () => {
    const skillItems = [
        { percentage: '95%', label: 'HTML5' },
        { percentage: '95%', label: 'CSS3' },
        { percentage: '95%', label: 'Git' },
        { percentage: '95%', label: 'SQL' }
    ];

    return (
        <Box id="skills" w="100%" bg="#d0e1f9" textAlign="center" p={{ base: '70px 20px', md: '70px 180px' }}>
            <Heading as="h2" mb="20px">Soy experto en</Heading>
            <Text mb="60px">En ésta sección puedes ver mis habilidades como programador, enfocándome principalmente en back-end.</Text>
            <Flex justify="center" flexWrap="wrap" gap="20px">
                {skillItems.map((item, index) => (
                    <VStack
                        key={index}
                        w="170px"
                        h="210px"
                        borderRadius="10px"
                        p="20px 10px"
                        boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                        textAlign="center"
                        bg="#ffffff"
                        transition="background-color 1s"
                        _hover={{ bg: '#0078d4' }}
                    >
                        <Heading as="h2" fontSize="22px" color="#0078d4" transition="color 0.5s" _hover={{ color: '#ffffff' }}>
                            {item.percentage}
                        </Heading>
                        <Heading as="h4" fontSize="18px" color="#333333">
                            {item.label}
                        </Heading>
                    </VStack>
                ))}
            </Flex>
        </Box>
    );
}

export default Skills;
