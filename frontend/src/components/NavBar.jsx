import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Box as="nav" py={4} px={4} bg="gray.50" boxShadow="md">
      <Flex justify="space-between" align="center">
        <Link to="/" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
          My Blog
        </Link>
        <InputGroup size="sm" maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="Search..." />
        </InputGroup>

        <Flex justify="flex-end">
          {isLoggedIn ? (
            <>
              <Button variant="outline" colorScheme="blue" mr={2} fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
                <Link to="/write">
                  Write
                </Link>
              </Button>
              <Button variant="solid" colorScheme="blue" mr={2}>
                <Link to="/profile">
                  Profile
                </Link>
              </Button>
              <Button variant="solid" colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="outline" colorScheme="blue" mr={2} fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
              <Link to="/login">
                Login
              </Link>
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
