import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="gray.800" color="white" p={20}>
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Argentina
          </Text>
          <Text mt={2} fontSize="sm">
            ¡Conéctate con nosotros en las redes sociales!
          </Text>
        </Box>
        <Flex>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" colorScheme="blue" />
          </Link>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaTwitter />} aria-label="Twitter" colorScheme="blue" />
          </Link>
          <Link href="#" isExternal mx={2}>
            <IconButton icon={<FaInstagram />} aria-label="Instagram" colorScheme="pink" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
