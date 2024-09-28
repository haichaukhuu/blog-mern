import React, { useState } from 'react';
import { Box, Button, Input, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        username,
        email,
        displayName,
        password,
        confirmPassword
      });

      if (response.status === 200) {
        // Registration successful, redirect to home page
        navigate('/');
      }
    } catch (err) {
      // Handle the error
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <Flex justify="center" align="center" h="100vh" bg="gray.100">
      <Box p="8" maxW="md" bg="white" borderRadius="md" boxShadow="md">
        <Heading textAlign="center" mb="6">Register</Heading>

        <Stack spacing="4" textAlign="center">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Display name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <Text color="red.500">{error}</Text>}

          <Button variant="solid" colorScheme="blue" onClick={handleRegister}>
            Register
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}

export default RegisterPage;
