import { Heading } from "@chakra-ui/react";

const Title = ({ text }) => {
  return (
    <Heading as='h2' p='5px' fontSize='28px' fontWeight='700' mb='15px'>
      {text}
    </Heading>
  );
};

export default Title;