import React, { useState } from 'react';
import { Box, Button, Input, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      
      // Assuming the backend returns a token
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to homepage after login
    } catch (err) {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <Flex justify="center" align="center" h="100vh" bg="gray.100">
      <Box p="8" maxW="md" bg="white" borderRadius="md" boxShadow="md">
        <Heading textAlign="center" mb="6">
          Login
        </Heading>

        <Stack spacing="4" textAlign="center">
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          {error && <Text color="red.500">{error}</Text>}
          
          <Button variant="solid" colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>

          <Text mb="4" fontWeight="bold">Don't have an account?</Text>
          <Button variant="outline" colorScheme="blue">
            <Link to="/register">Register here!</Link>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default LoginPage;
