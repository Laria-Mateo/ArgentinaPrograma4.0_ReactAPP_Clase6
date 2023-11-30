import { useState } from 'react';
import { Box, Flex, Heading, Spacer, Link, Collapse, Button } from '@chakra-ui/react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="blue.700" p={9} color="white">
      <Flex align="center">
        <Heading as="h1" size="md" mr={8}>
          Formulario de inscripcion a Beca-Argentina
        </Heading>
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }}>
          <Button onClick={toggleMenu}>Menú</Button>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex>
            <Link href="#" mr={4}>
              Inicio
            </Link>
            <Link href="#" mr={4}>
              Contacto
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          align={{ base: 'flex-start', md: 'center' }}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="#" mr={4} mb={{ base: 2, md: 0 }}>
            Inicio
          </Link>
          <Link href="#" mr={4} mb={{ base: 2, md: 0 }}>
            Contacto
          </Link>
        </Flex>
      </Collapse>
    </Box>
  );
}

export default Header;
